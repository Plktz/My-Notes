const pino = require("pino");

module.exports = pino({
  level: 'info',//getting on deployment  process.env.PINO_LOG_LEVEL
  colorize: true,
},
 pino.destination("./utils/serverLogs.log")
);
