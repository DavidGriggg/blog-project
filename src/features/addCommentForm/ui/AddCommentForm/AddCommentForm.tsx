import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AddCommentForm.module.scss";
import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/Stack";

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation();
        const text = useSelector(getAddCommentFormText);
        const dispatch = useAppDispatch();

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text || "");
            onCommentTextChange("");
        }, [text, onSendComment, onCommentTextChange]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <HStack
                    className={classNames(cls.AddCommentForm, {}, [className])}
                    justify="between"
                    max
                >
                    <Input
                        className={cls.input}
                        placeholder={t("shared:typeComment")}
                        value={text}
                        onChange={onCommentTextChange}
                    />
                    <Button onClick={onSendHandler}>
                        {t("shared:actions.submit")}
                    </Button>
                </HStack>
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
