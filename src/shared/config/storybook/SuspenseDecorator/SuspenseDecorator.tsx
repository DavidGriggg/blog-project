import { Suspense } from "react";
import { StoryObj } from "@storybook/react";
import { Loader } from "@/shared/ui/Loader";

export const SuspenseDecorator = (StoryComponent: StoryObj) => {
    return (
        <Suspense fallback={<Loader />}>
            <StoryComponent />
        </Suspense>
    );
};
