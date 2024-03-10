import { classNames, Modes } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, memo } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outline_red",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        fullWidth,
        ...otherProps
    } = props;

    const modes: Modes = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, modes, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
