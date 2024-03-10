import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames("", {}, [className])}>
            {isEdit ? "редактирование" : "создание"}
        </Page>
    );
});

export default ArticleEditPage;
