import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "@/entities/Country";
import { IListBox } from "@/shared/ui/Popups";

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
            <IListBox
                label={t("profile:yourCountry")}
                value={value as string}
                defaultValue={t("profile:yourCountry")}
                items={options}
                className={className as string}
                disabled={Boolean(readOnly)}
                direction="top right"
                onChange={onChangeHandler}
            />
        );
    },
);
