
export {
	SimpleLogger,
	JSConsoleLogger,
	SyslogLogger,
	Log4jLogger,
	NpmLogger,
	AngularJSLogger,
} from './types'


export {
	simpleLoggerToConsole,
	consoleLoggerToConsole,
	syslogLoggerToConsole,
	log4jLoggerToConsole,
	serverLoggerToConsole,
	npmLoggerToConsole,
	angularJSLoggerToConsole,
} from './to-console'


export {
	simpleLoggerToVoid,
	consoleLoggerToVoid,
	syslogLoggerToVoid,
	log4jLoggerToVoid,
	serverLoggerToVoid,
	npmLoggerToVoid,
	angularJSLoggerToVoid,
} from './to-void'

