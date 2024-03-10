import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useEffect, useMemo, useState } from "react";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSidebarItemsList } from "../../model/config/sidebar";
import { SidebarItemType } from "../../model/types/sidebar";
import { getUserAuthData } from "@/entities/User";
import { VStack } from "@/shared/ui/Stack";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [sidebarItemsList, setSidebarItemsList] = useState<SidebarItemType[]>(
        [],
    );

    const userData = useSelector(getUserAuthData);

    useEffect(() => {
        setSidebarItemsList(getSidebarItemsList(userData?.id || ""));
    }, [userData?.id]);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <Button
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square={true}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <VStack className={cls.items} gap="8" role="navigation">
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
