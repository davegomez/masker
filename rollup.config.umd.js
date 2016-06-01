import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/index.umd.js';
config.moduleName = 'masker';

export default config;