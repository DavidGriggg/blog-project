import { useTranslation } from "react-i18next";
import { Currency } from "@/entities/Currency";
import { memo, useCallback } from "react";
import { IListBox } from "@/shared/ui/Popups";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback((value: string) => {
            onChange?.(value as Currency);
        }, []);

        return (
            <IListBox
                className={className as string}
                label={t("profile:yourCurrency")}
                value={value as string}
                items={options}
                defaultValue={t("profile:yourCurrency")}
                onChange={onChangeHandler}
                disabled={Boolean(readOnly)}
                direction="top right"
            />
        );
    },
);
