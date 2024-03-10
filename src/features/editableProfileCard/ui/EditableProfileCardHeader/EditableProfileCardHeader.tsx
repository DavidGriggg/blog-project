import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { HStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    ({ className }: EditableProfileCardHeaderProps) => {
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
            <HStack
                max
                justify="between"
                className={classNames("", {}, [className])}
            >
                <Text title={t("profile:menu")} />
                {canEdit && (
                    <>
                        {readOnly ? (
                            <Button
                                onClick={onEdit}
                                data-testId="EditableProfileCardHeader.EditButton"
                            >
                                {t("shared:actions.edit")}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testId="EditableProfileCardHeader.CancelButton"
                                >
                                    {t("shared:actions.cancel")}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    data-testId="EditableProfileCardHeader.SaveButton"
                                >
                                    {t("shared:actions.save")}
                                </Button>
                            </HStack>
                        )}
                    </>
                )}
            </HStack>
        );
    },
);
