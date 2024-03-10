import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const cssLoader = buildCssLoader(isDev);
    const svgLoader = buildSvgLoader();
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
