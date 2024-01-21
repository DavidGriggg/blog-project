import { classNames, Modes } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    onChangeUsername: (value?: string) => void;
    onChangeAvatar: (value?: string) => void;
    onChangeCurrency: (value: Currency) => void;
    onChangeCountry: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className, cls.error],
                )}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("profile:fetchProfileError")}
                    text={t("shared:tryRefresh")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const modes: Modes = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, modes, [className])}>
            {data?.avatar && (
                <div className={cls.AvatarWrapper}>
                    <Avatar src={data.avatar || ""} size={150} />
                </div>
            )}
            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t("profile:yourFirstname")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeFirstname}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t("profile:yourLastname")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeLastname}
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder={t("profile:yourAge")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeAge}
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t("profile:yourCity")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeCity}
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder={t("profile:yourUsername")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeUsername}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                placeholder={t("profile:yourAvatar")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency || Currency.RUB}
                onChange={onChangeCurrency}
                readOnly={Boolean(readOnly)}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country || Country.Russia}
                onChange={onChangeCountry}
                readOnly={Boolean(readOnly)}
            />
        </div>
    );
};
