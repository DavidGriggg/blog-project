import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation("about");

    return <div>{t("menu")}</div>;
};

export default AboutPage;
