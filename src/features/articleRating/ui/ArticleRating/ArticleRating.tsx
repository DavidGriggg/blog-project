import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import {
    useArticleRating,
    useRateArticle,
} from "@/features/articleRating/api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface ArticleRatingProps {
    className?: string;
    id: string;
}

const ArticleRating = memo(({ className = "", id }: ArticleRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useArticleRating({
        articleId: id,
        userId: userData?.id ?? "",
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? "",
                    articleId: id,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [id, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            className={className || ""}
            rate={rating?.rate}
            title={t("article:estimate")}
            feedbackTitle={t("article:leaveFeedback")}
            hasFeedback
        />
    );
});

export default ArticleRating;
