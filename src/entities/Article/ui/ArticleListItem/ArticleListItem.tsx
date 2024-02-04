import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye.svg";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article, navigate]);

    const types = <Text className={cls.types} text={article.type.join(", ")} />;
    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames("", {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar || ""} />
                        <Text
                            className={cls.username}
                            text={article.user?.username}
                        />
                        <Text className={cls.date} text={article?.createdAt} />
                    </div>
                    <Text className={cls.title} title={article?.title} />
                    {types}
                    <img
                        className={cls.img}
                        src={article?.img}
                        alt={article?.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle}>
                            {t("shared:actions.readMore")}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </div>
    );
});
