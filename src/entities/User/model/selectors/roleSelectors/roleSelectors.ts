import { StateSchema } from "@/app/providers/StoreProvider";
import { UserRole } from "@/entities/User";

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = (state: StateSchema) =>
    Boolean(state.user.authData?.roles?.includes(UserRole.ADMIN));

export const isUserManager = (state: StateSchema) =>
    Boolean(state.user.authData?.roles?.includes(UserRole.MANAGER));
