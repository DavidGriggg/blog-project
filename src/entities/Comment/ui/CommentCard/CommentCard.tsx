import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { Comment } from "@/entities/Comment";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { VStack } from "@/shared/ui/Stack";
import { RoutePath } from "@/shared/const/router";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                <Avatar size={30} src={comment.user?.avatar || ""} />
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
