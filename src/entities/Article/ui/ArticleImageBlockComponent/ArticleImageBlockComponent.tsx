import { memo } from "react";
import cls from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <>
                <img
                    className={classNames(cls.img, {}, [className])}
                    src={block.src}
                    alt={block?.title}
                />
                {block?.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </>
        );
    },
);
