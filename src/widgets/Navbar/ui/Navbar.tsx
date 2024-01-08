import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation("shared");

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t("signIn")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, expedita fuga laudantium mollitia nesciunt quam quas
                quia rerum sit soluta!
            </Modal>
        </div>
    );
};
