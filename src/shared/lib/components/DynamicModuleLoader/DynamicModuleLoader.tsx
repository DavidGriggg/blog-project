import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import {
    StoreWithManager,
    StateSchemaKey,
} from "@/app/providers/StoreProvider";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const store = useStore() as StoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mounterReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mounterReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
    }, []);

    return <>{children}</>;
};
