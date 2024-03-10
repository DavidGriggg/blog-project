import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import { memo, useState } from "react";
import { Icon } from "@/shared/ui/Icon";
import StarIcon from "@/shared/assets/icons/star.svg";

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;
    const [currentStartsCount, setCurrentStartsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStartsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames("", {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStartsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    )}
                    Svg={StarIcon}
                    width={size}
                    height={size}
                    onClick={onClick(starNumber)}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    key={starNumber}
                />
            ))}
        </div>
    );
});
