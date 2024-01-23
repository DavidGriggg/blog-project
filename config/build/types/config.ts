export type BuildMode = "production" | "development";

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    apiUrl: string;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    apiUrl: string;
    port: number;
    project: "storybook" | "frontend" | "jest";
}
