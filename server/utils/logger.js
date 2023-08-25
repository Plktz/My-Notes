const pino = require("pino");

module.exports = pino({
  level: process.env.PINO_LOG_LEVEL,
  colorize: true,
},
 pino.destination("./utils/serverLogs.log")
);
