const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public", "../assets"],
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
    // TODO Resolve performance issues with this plugin or find an alternative
    // For more details see: https://github.com/chromaui/storybook-addon-pseudo-states/issues/6
    // "storybook-addon-pseudo-states",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  /** @param {import('webpack').Configuration} config */
  webpackFinal: (config) => {
    (config.resolve.plugins ??= []).push(new TSConfigPathsPlugin());
    return config;
  },
};
