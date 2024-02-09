import path from 'path';
import webpack from 'webpack';
import {buildWebpack} from "@packages/build-config";
import {BuildMode, BuildPaths, BuildPlatform} from "@packages/build-config";
import packageJson from './package.json'


interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'bootstrap.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'src/host',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx'
        },
        shared: {
            ...packageJson.dependencies
        }
    }))

    return config;
}

