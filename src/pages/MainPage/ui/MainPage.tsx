import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

const MainPage = () => {
    const { t } = useTranslation("shared");
    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t("main")}
            <Input
                placeholder="Введите текст"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
