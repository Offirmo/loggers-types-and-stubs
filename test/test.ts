
console.log('Hello')


import {
	SimpleLogger,
	JSConsoleLogger,
	SyslogLogger,
	Log4jLogger,
	NpmLogger,
	AngularJSLogger,
} from '..'


import {
	simpleLoggerToConsole,
	consoleLoggerToConsole,
	syslogLoggerToConsole,
	log4jLoggerToConsole,
	serverLoggerToConsole,
	npmLoggerToConsole,
	angularJSLoggerToConsole,
} from '..'


import {
	simpleLoggerToVoid,
	consoleLoggerToVoid,
	syslogLoggerToVoid,
	log4jLoggerToVoid,
	serverLoggerToVoid,
	npmLoggerToVoid,
	angularJSLoggerToVoid,
} from '..'


const interesting = [
	'alert',
	'crit',
	'debug',
	'emerg',
	'error',
	'fatal',
	'info',
	'log',
	'notice',
	'silly',
	'trace',
	'verbose',
	'warn',
	'warning',
]

console.log('--- should display:');

[
	simpleLoggerToConsole,
	consoleLoggerToConsole,
	syslogLoggerToConsole,
	log4jLoggerToConsole,
	serverLoggerToConsole,
	npmLoggerToConsole,
	angularJSLoggerToConsole,
].forEach((logger: any) => {
	Object.keys(logger).forEach(key => {
		if (!logger.hasOwnProperty(key)) return
		if (!interesting.includes(key)) return

		logger[key](`"${key}"`)
	})
})

console.log('--- should NOT display:');

[
	simpleLoggerToVoid,
	consoleLoggerToVoid,
	syslogLoggerToVoid,
	log4jLoggerToVoid,
	serverLoggerToVoid,
	npmLoggerToVoid,
	angularJSLoggerToVoid,
].forEach((logger: any) => {
	Object.keys(logger).forEach(key => {
		if (!logger.hasOwnProperty(key)) return
		if (!interesting.includes(key)) return

		logger[key](`"${key}"`)
	})
})

console.log('--- done')
