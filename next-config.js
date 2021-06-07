const withTM = require("next-transpile-modules")(["drei", "three"]);
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withTM]);
