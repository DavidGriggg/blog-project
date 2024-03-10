import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import { memo, SVGProps, FC } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(
    ({ className, Svg, inverted, ...otherProps }: IconProps) => {
        return (
            <Svg
                className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                    className,
                ])}
                {...otherProps}
            ></Svg>
        );
    },
);
