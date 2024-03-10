import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "@/entities/User";
import { RoutePath } from "@/shared/const/router";

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, []);

    return (
        <Dropdown
            className={classNames("", {}, [className])}
            direction="bottom left"
            trigger={<Avatar size={30} src={authData?.avatar as string} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t("shared:adminPanel"),
                              onClick: () => navigate(RoutePath.admin_panel),
                          },
                      ]
                    : []),
                {
                    content: t("profile:menu"),
                    onClick: () => navigate(RoutePath.profile + authData?.id),
                },
                {
                    content: t("shared:auth.logOut"),
                    onClick: onLogOut,
                },
            ]}
        />
    );
});
