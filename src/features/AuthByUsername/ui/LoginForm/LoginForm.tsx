import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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

    const onLoginClick = useCallback(async () => {
        // @ts-ignore
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

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
        };
    }, [onKeyDown]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("shared:auth.authForm")} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    className={cls.input}
                    placeholder={t("shared:auth.enterUsername")}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    className={cls.input}
                    placeholder={t("shared:auth.enterPassword")}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t("shared:auth.signIn")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
