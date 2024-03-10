import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContext {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContext>({});

const getAsyncAnimationModules = () => {
    return Promise.all([
        import("@react-spring/web"),
        import("@use-gesture/react"),
    ]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContext>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring as SpringType;
            GestureRef.current = Gesture as GestureType;
            setIsLoaded(true);
        });
    });

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
