import { VFC, SVGProps } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "main",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "aboutUs",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "profile:menu",
        authOnly: true,
    },
];
