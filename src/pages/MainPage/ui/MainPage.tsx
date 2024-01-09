import { useTranslation } from "react-i18next";
import { Counter } from "entities/Counter";

const MainPage = () => {
    const { t } = useTranslation("shared");

    return <div>{t("main")}</div>;
};

export default MainPage;
