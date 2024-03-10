import { ReactNode } from "react";
import { Listbox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import popupCls from "../../styles/popup.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function IListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        disabled,
        direction = "bottom right",
        label,
    } = props;

    const optionsClasses: any[] = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{label + ">"}</span>}
            <Listbox
                className={classNames(popupCls.popup, {}, [className])}
                as="div"
                value={value as any}
                onChange={onChange}
            >
                <Listbox.Button className={cls.trigger}>
                    <Button disabled={Boolean(disabled)}>
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <Listbox.Option
                            className={cls.item}
                            value={item?.value as any}
                            disabled={Boolean(disabled)}
                            key={item?.value}
                            as="div"
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item?.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && "!!!"}
                                    {item?.content}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
}
