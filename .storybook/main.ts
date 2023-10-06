import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config: Configuration) => {
    // 👈 and add this here
    config?.module?.rules?.push({
      test: /\.scss$/,
      use: [
        // We're in dev and want HMR, SCSS is handled in JS
        // In production, we want our css as files
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [["postcss-preset-env"]],
            },
          },
        },
        "sass-loader",
      ],
    },)
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
