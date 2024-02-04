import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
    { value: Country.Spain, content: Country.Spain },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Poland, content: Country.Poland },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readOnly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback((value: string) => {
            onChange?.(value as Country);
        }, []);

        return (
            <div className={classNames("Select", {}, [className])}>
                <Select
                    label={t("profile:yourCountry")}
                    options={options}
                    value={value || Country.Russia}
                    onChange={onChangeHandler}
                    readOnly={Boolean(readOnly)}
                ></Select>
            </div>
        );
    },
);
