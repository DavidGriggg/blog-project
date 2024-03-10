import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "@/features/AuthByUsername";
import { loginActions } from "@/features/AuthByUsername/model/slice/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Text, TextTheme } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { RoutePath } from "@/shared/const/router";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
        dispatch(loginActions.resetError());
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title="News app"
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t("article:create")}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t("shared:auth.signIn")}
            </Button>
            {isAuthModalOpen && (
                <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
            )}
        </header>
    );
});
