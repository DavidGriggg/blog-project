import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleViewSelector.module.scss";
import { memo } from "react";
import { ArticleView } from "@/entities/Article";
import viewSmall from "@/shared/assets/icons/viewSmall.svg";
import viewBig from "@/shared/assets/icons/viewBig.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: viewSmall,
    },
    {
        view: ArticleView.BIG,
        icon: viewBig,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames("", {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        className={classNames(
                            "icon",
                            {
                                [cls.notSelected]: viewType.view !== view,
                            },
                            [],
                        )}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
