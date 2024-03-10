import { Suspense, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { PageLoader } from "@/widgets/PageLoader";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserMounted, userActions } from "../entities/User";
import { useTheme } from "../shared/lib/hooks/useTheme/useTheme";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
