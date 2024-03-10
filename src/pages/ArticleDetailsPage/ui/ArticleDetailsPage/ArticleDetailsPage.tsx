import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/Stack";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames("", {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRating id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
