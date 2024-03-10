import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesPageFilters.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleViewSelector } from "@/features/ArticleViewSelector/ArticleViewSelector";
import {
    ArticleSortField,
    ArticleTypeTabs,
    ArticleView,
} from "@/entities/Article";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { ArticleSortSelect } from "@/entities/Article/ui/ArticleSortSelect/ArticleSortSelect";
import { SortOrder } from "@/shared/types";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { ArticleType } from "@/entities/Article";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const view = useSelector(getArticlesPageView);
        const sort = useSelector(getArticlesPageSort);
        const order = useSelector(getArticlesPageOrder);
        const search = useSelector(getArticlesPageSearch);
        const type = useSelector(getArticlesPageType);

        const fetchData = useCallback(() => {
            // @ts-ignore
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
                dispatch(articlesPageActions.setPage(1));
            },
            [dispatch],
        );

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(newSort));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlesPageActions.setOrder(newOrder));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSearch = useCallback(
            (newValue: string) => {
                dispatch(articlesPageActions.setSearch(newValue));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );

        const onChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(articlesPageActions.setType(value));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        return (
            <div className={classNames("", {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelect
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={t("shared:search")}
                    />
                </Card>
                <ArticleTypeTabs
                    className={cls.tabs}
                    value={type}
                    onChangeType={onChangeType}
                />
            </div>
        );
    },
);
