import { Flex, FlexProps } from "../Flex/Flex";
import { FlexAlign } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack = (props: VStackProps) => {
    const { align = "start" } = props;
    // @ts-ignore
    return <Flex {...props} direction="column" align={align as FlexAlign} />;
};
