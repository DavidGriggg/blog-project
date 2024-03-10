import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article";
import { HStack } from "@/shared/ui/Stack";
import { RoutePath } from "../../../../shared/const/router";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
        const userData = useSelector(getUserAuthData);
        const articleData = useSelector(getArticleDetailsData);
        const canEdit = userData?.id === articleData?.user.id;

        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article_details}${articleData?.id}/edit`);
        }, [navigate]);

        return (
            <HStack
                className={classNames("", {}, [className])}
                justify="between"
                max
            >
                <Button onClick={onBackToList}>
                    {t("shared:actions.backToList")}
                </Button>
                {canEdit && (
                    <Button onClick={onEditArticle}>
                        {t("shared:actions.edit")}
                    </Button>
                )}
            </HStack>
        );
    },
);
