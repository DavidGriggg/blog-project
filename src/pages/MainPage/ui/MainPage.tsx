import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("shared");

    return <div>{t("main")}</div>;
};

export default MainPage;
