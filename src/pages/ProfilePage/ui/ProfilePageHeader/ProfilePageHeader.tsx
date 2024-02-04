import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readOnly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        // @ts-ignore
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("profile:menu")} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readOnly ? (
                        <Button className={cls.btn} onClick={onEdit}>
                            {t("shared:actions.edit")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={cls.btn}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t("shared:actions.cancel")}
                            </Button>
                            <Button onClick={onSave}>
                                {t("shared:actions.save")}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
