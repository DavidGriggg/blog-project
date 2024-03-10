import { rtkApi } from "@/shared/api/rtkApi";
import { Notification } from "../model/types/notification";

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: "/notifications",
            }),
        }),
    }),
    overrideExisting: false,
});

const { useGetNotificationsQuery } = notificationApi;

export const useNotifications = useGetNotificationsQuery;
