
console.log('Hello')


import {
	SimpleLogger,
	JSConsoleLogger,
	SyslogLogger,
	Log4jLogger,
	NpmLogger,
	AngularJSLogger,
	BunyanLogger,
	CompatibleLogger,
} from '..'


import {
	simpleLoggerToConsole,
	consoleLoggerToConsole,
	syslogLoggerToConsole,
	log4jLoggerToConsole,
	serverLoggerToConsole,
	npmLoggerToConsole,
	angularJSLoggerToConsole,
	bunyanLoggerToConsole,
	compatibleToConsole,
} from '..'


import {
	simpleLoggerToVoid,
	consoleLoggerToVoid,
	syslogLoggerToVoid,
	log4jLoggerToVoid,
	serverLoggerToVoid,
	npmLoggerToVoid,
	angularJSLoggerToVoid,
	bunyanLoggerToVoid,
	compatibleLoggerToVoid,
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
	bunyanLoggerToConsole,
	compatibleToConsole,
	bunyanLoggerToVoid,
	compatibleLoggerToVoid,
].forEach((logger: any) => {
	console.log('-')

	Object.keys(logger).forEach(key => {
		if (!logger.hasOwnProperty(key)) return
		if (!interesting.includes(key)) return

		console.log(`- "${key}":`)
		logger[key](`Logging "${key}" to console`)
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
	console.log('-')

	Object.keys(logger).forEach(key => {
		if (!logger.hasOwnProperty(key)) return
		if (!interesting.includes(key)) return

		logger[key](`"${key}"`)
	})
})

console.log('--- done')
