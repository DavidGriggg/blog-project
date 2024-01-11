import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation("shared");

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t("enterUsername")}
                autofocus
            />
            <Input className={cls.input} placeholder={t("enterPassword")} />
            <Button className={cls.loginBtn}>{t("signIn")}</Button>
        </div>
    );
};