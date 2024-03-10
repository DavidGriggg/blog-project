import { useCallback, useEffect, useRef, useState } from "react";

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export function useModal({ onClose, isOpen, animationDelay }: UseModalProps) {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return { isClosing, close, isMounted };
}
