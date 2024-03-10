import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text, TextAlign, TextSize, TextTheme } from "@/shared/ui/Text";
import { Avatar } from "@/shared/ui/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Icon } from "@/shared/ui/Icon";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import CalendarIcon from "@/shared/assets/icons/calendar.svg";
import { articleDetailsReducer } from "../../model/slices/articleDetailsSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { HStack, VStack } from "@/shared/ui/Stack";
import {
    ArticleBlock,
    ArticleBlockType,
} from "@/entities/Article/model/consts/consts";

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t("article:errorOccurred")}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar
                        size={200}
                        src={article?.img || ""}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} />
                        <Text text={String(article?.createdAt)} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
