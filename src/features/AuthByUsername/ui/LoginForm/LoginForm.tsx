import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                onLoginClick();
            }
        },
        [onLoginClick],
    );

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            dispatch(loginActions.resetError);
        };
    }, [onKeyDown]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("authForm")} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                placeholder={t("enterUsername")}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                placeholder={t("enterPassword")}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("signIn")}
            </Button>
        </div>
    );
});
