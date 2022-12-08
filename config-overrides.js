
const stylusRegex = /\.(styl|stylus)$/;
const stylusModuleRegex = /\.module\.(styl|stylus)$/;

module.exports = function override(config, env) {
  console.log('config: >>', config.module.rules[1]);
  console.log('env: >>', env)
  const stylusRules = {

  }
  return config;
}