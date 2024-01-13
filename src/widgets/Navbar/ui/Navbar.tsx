import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, []);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogOut}
                >
                    {t("logOut")}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t("signIn")}
            </Button>
            {isAuthModalOpen && (
                <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
            )}
        </div>
    );
};
