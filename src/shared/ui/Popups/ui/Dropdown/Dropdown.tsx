import { Menu } from "@headlessui/react";
import cls from "./Dropdown.module.scss";
import popupCls from "../../styles/popup.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const { className, trigger, items, direction = "bottom right" } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, {
                                [popupCls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    return (
                        <Menu.Item
                            as="div"
                            disabled={Boolean(item?.disabled)}
                            key={"dropdown-key" + index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
