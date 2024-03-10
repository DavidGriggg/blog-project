import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Comment } from "@/entities/Comment";
import { Text } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "@/shared/ui/Stack";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames("", {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        key={comment.id}
                    />
                ))
            ) : (
                <Text text={t("shared:noComments")} />
            )}
        </VStack>
    );
});
