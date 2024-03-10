import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { UserRole } from "@/entities/User";
import { useMemo } from "react";
import { getUserRoles } from "@/entities/User/model/selectors/roleSelectors/roleSelectors";
import { RoutePath } from "@/shared/const/router";

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[] | undefined;
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    let auth = useSelector(getUserAuthData);
    let location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => {
            return Boolean(userRoles?.includes(requiredRole));
        });
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
