const logger = require("log4js");
const path = require("path");

const logDir = path.resolve(__dirname ,'../logs/koaPro');
const levels = {
  'trace': logger.levels.TRACE,
  'debug': logger.levels.DEBUG,
  'info': logger.levels.INFO,
  'warn': logger.levels.WARN,
  'error': logger.levels.ERROR,
  'fatal': logger.levels.FATAL
};
const logConfig = {
  appenders:{
    default:{
      type: 'file',
      filename: logDir,
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
    }
  },
  categories: { default: { appenders: ["default"], level: "info" } }
};

logger.configure(logConfig);
exports.log = logger.getLogger('default');

