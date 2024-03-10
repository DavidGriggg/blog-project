import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Tabs.module.scss";
import { memo, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    const handleClick = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, []);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    onClick={handleClick(tab)}
                    key={tab.value}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
