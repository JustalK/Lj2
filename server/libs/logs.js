'use strict';

const winston = require('winston');

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
		new winston.transports.File({ filename: 'logs/combined.log' }),
		new winston.transports.Console({ format: winston.format.simple() })
	]
});

module.exports = {
	info: message => {
		logger.info(message);
	}
};
