import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/widgets/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { useSearchParams } from "react-router-dom";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        // @ts-ignore
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
