import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "@/shared/ui/Tabs";
import { ArticleType } from "@/entities/Article";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
    ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
        const { t } = useTranslation();

        const tabs = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t("article:types.all"),
                },
                {
                    value: ArticleType.SPORTS,
                    content: t("article:types.sports"),
                },
                {
                    value: ArticleType.IT,
                    content: t("article:types.IT"),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t("article:types.science"),
                },
            ],
            [],
        );

        const onTabClick = useCallback(
            (tab: TabItem) => {
                onChangeType(tab.value as ArticleType);
            },
            [onChangeType],
        );

        return (
            <Tabs
                className={classNames("", {}, [className])}
                tabs={tabs}
                value={value}
                onTabClick={onTabClick}
            ></Tabs>
        );
    },
);
