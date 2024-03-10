import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { NotificationList } from "@/entities/Notification";
import { Popover } from "@/shared/ui/Popups";
import NotificationsIcon from "@/shared/assets/icons/ring.svg";
import { Drawer } from "@/shared/ui/Drawer";
import { BrowserView, MobileView } from "react-device-detect";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                <Icon Svg={NotificationsIcon} inverted />
            </Button>
        );

        return (
            <div>
                <BrowserView>
                    <Popover
                        className={classNames("", {}, [className])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </div>
        );
    },
);
