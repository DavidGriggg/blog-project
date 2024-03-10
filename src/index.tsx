import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./app/providers/StoreProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";

import "@/app/styles/index.scss";
import { initI18nProd } from "./shared/config/i18n/i18n";

initI18nProd();

const container = document.getElementById("root");

if (!container) {
    throw new Error(
        "Root container was not found. React application can't be mounted",
    );
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from "./shared/const/theme";
