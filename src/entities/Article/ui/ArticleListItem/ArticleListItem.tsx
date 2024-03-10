import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text";
import { Card } from "@/shared/ui/Card";
import { Avatar } from "@/shared/ui/Avatar";
import { Button } from "@/shared/ui/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Icon } from "@/shared/ui/Icon";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { AppLink } from "@/shared/ui/AppLink";
import { ArticleView } from "@/entities/Article";
import { ArticleBlockType } from "@/entities/Article";
import { RoutePath } from "@/shared/const/router";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget | undefined;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

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
                        <AppLink to={RoutePath.article_details + article.id}>
                            <Button>{t("shared:actions.readMore")}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            className={classNames("", {}, [className, cls[view]])}
            to={RoutePath.article_details + article.id}
        >
            <Card className={cls.card}>
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
        </AppLink>
    );
});
