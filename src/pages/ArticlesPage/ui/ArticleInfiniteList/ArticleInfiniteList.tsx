import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleList } from "@/entities/Article";
import { useSelector } from "react-redux";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui/Text";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const { t } = useTranslation();
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const error = useSelector(getArticlesPageError);
        const view = useSelector(getArticlesPageView);

        if (error) {
            return <Text title={t("article:error")} />;
        }

        return (
            <div className={classNames("", {}, [className])}>
                <ArticleList
                    className={className}
                    view={view}
                    articles={articles}
                    isLoading={Boolean(isLoading)}
                />
            </div>
        );
    },
);
