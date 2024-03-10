import { classNames, Modes } from "@/shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Profile } from "@/entities/Profile";

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
            <HStack
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className, cls.error],
                )}
                justify="center"
                max
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("profile:fetchProfileError")}
                    text={t("shared:tryRefresh")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const modes: Modes = {
        [cls.editing]: !readOnly,
    };

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ProfileCard, modes, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data.avatar || ""} size={150} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t("profile:yourFirstname")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeFirstname}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t("profile:yourLastname")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t("profile:yourAge")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeAge}
            />
            <Input
                value={data?.city}
                placeholder={t("profile:yourCity")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeCity}
            />
            <Input
                value={data?.username}
                placeholder={t("profile:yourUsername")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeUsername}
            />
            <Input
                value={data?.avatar}
                placeholder={t("profile:yourAvatar")}
                readOnly={Boolean(readOnly)}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                value={data?.currency || Currency.RUB}
                onChange={onChangeCurrency}
                readOnly={Boolean(readOnly)}
            />
            <CountrySelect
                value={data?.country || Country.Russia}
                onChange={onChangeCountry}
                readOnly={Boolean(readOnly)}
            />
        </VStack>
    );
};
