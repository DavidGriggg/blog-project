import { ArticleDetailsCommentsSchema } from "@/pages/ArticleDetailsPage";
import { ArticleDetailsRecommendationsSchema } from "@/pages/ArticleDetailsPage";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
