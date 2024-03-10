import { ReactNode } from "react";
import { classNames, Modes } from "@/shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "@/shared/ui/Portal";
import { Overlay } from "@/shared/ui/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });
    const { theme } = useTheme();

    const modes: Modes = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.body}>
            <div
                className={classNames(cls.Modal, modes, [
                    className,
                    theme,
                    "app_modal",
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
