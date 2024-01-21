import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";

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
            <div className={classNames("Select", {}, [className])}>
                <Select
                    label={t("profile:yourCurrency")}
                    options={options}
                    value={value || Currency.RUB}
                    onChange={onChangeHandler}
                    readOnly={Boolean(readOnly)}
                ></Select>
            </div>
        );
    },
);
