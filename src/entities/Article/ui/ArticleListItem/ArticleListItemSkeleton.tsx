import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ArticleView } from "@/entities/Article";

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <div className={classNames("", {}, [className, cls[view]])}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton
                                width={30}
                                height={30}
                                borderRadius="50%"
                            />
                            <Skeleton
                                className={cls.username}
                                width={150}
                                height={16}
                            />
                            <Skeleton
                                className={cls.date}
                                width={150}
                                height={16}
                            />
                        </div>
                        <Skeleton
                            className={cls.title}
                            width={250}
                            height={24}
                        />
                        <Skeleton className={cls.img} height={200} />
                        <div className={cls.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames("", {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            className={cls.img}
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton className={cls.title} width={150} height={16} />
                </Card>
            </div>
        );
    },
);