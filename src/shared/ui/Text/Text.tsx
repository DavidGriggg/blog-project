import { classNames, Modes } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface TextProps {
    className?: string;
    title?: string | undefined;
    text?: string | undefined;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const modes: Modes = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames("", modes, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
