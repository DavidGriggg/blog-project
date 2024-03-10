import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "@/shared/ui/Text";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { VStack } from "@/shared/ui/Stack";

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        useInitialEffect(() => {
            // @ts-ignore
            dispatch(fetchCommentsByArticleId(id));
        });

        const onSendComment = useCallback(
            (text: string) => {
                // @ts-ignore
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <Text size={TextSize.L} title={t("shared:comments")} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={Boolean(commentsIsLoading)}
                />
            </VStack>
        );
    },
);
