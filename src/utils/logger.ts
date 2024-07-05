/*
winston aims to decouple parts of the logging process to make it more flexible and extensible. 
Attention is given to supporting flexibility in log formatting
*/
import * as winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

// Define a custom format function
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  verbose: "cyan",
  debug: "blue",
  silly: "magenta",
};

winston.addColors(colors);

const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({ all: true }), // Apply custom colors
    timestamp(),
    customFormat,
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/test.log", level: "info" }),
  ],
});

export default logger;
