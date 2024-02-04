import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/list.svg";

import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export const getSidebarItemsList = (userId: string): SidebarItemType[] => {
    return [
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
            path: RoutePath.profile + (userId || ""),
            Icon: ProfileIcon,
            text: "profile:menu",
            authOnly: true,
        },
        {
            path: RoutePath.articles,
            Icon: ArticleIcon,
            text: "article:menu",
            authOnly: true,
        },
    ];
};
