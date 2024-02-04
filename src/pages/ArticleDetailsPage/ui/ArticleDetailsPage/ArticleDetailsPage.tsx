import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button } from "shared/ui/Button/Button";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            // @ts-ignore
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <Text theme={TextTheme.ERROR} title={t("article:notFound")} />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <Button onClick={onBackToList}>
                    {t("shared:actions.backToList")}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    className={cls.commentTitle}
                    title={t("shared:comments")}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={Boolean(commentsIsLoading)}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
