import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number | undefined;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        readOnly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const isCaretVisible = isFocused && !readOnly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder} >`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9.5}px` }}
                    />
                )}
            </div>
        </div>
    );
});
