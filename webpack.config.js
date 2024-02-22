const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "myorg",
    projectName: "authn",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [new Dotenv()],
  });
};
