import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleSortSelect.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import { Select, SelectOption } from "@/shared/ui/Select";
import { ArticleSortField } from "@/entities/Article";
import { SortOrder } from "@/shared/types";

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("shared:ascending"),
            },
            {
                value: "desc",
                content: t("shared:descending"),
            },
        ],
        [],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("shared:byCreationDate"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("shared:byTitle"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("shared:byViews"),
            },
        ],
        [],
    );

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t("shared:actions.sortBy")}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                className={cls.order}
                options={orderOptions}
                label={t("shared:by")}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
