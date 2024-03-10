import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, HTMLAttributeAnchorTarget, memo } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    target?: HTMLAttributeAnchorTarget | undefined;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        target,
    } = props;
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            target={target}
        >
            {children}
        </Link>
    );
});
