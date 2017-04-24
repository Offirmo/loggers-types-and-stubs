

// for most simple cases
// subset of Console for easy plugging
interface SimpleLogger {
	log(message?: any, ...optionalParams: any[]): void
	info(message?: any, ...optionalParams: any[]): void
	warn(message?: any, ...optionalParams: any[]): void
	error(message?: any, ...optionalParams: any[]): void
}

// https://developer.mozilla.org/en/docs/Web/API/console
type JSConsoleLogger = Console

// https://tools.ietf.org/html/rfc5424
interface SyslogLogger {
	emerg(message?: any, ...optionalParams: any[]): void
	alert(message?: any, ...optionalParams: any[]): void
	crit(message?: any, ...optionalParams: any[]): void
	error(message?: any, ...optionalParams: any[]): void
	warning(message?: any, ...optionalParams: any[]): void
	notice(message?: any, ...optionalParams: any[]): void
	info(message?: any, ...optionalParams: any[]): void
	debug(message?: any, ...optionalParams: any[]): void
}

// https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/Level.html
// https://en.wikipedia.org/wiki/Log4j#Log4j_log_levels
interface Log4jLogger {
	fatal(message?: any, ...optionalParams: any[]): void
	error(message?: any, ...optionalParams: any[]): void
	warn(message?: any, ...optionalParams: any[]): void
	info(message?: any, ...optionalParams: any[]): void
	debug(message?: any, ...optionalParams: any[]): void
	trace(message?: any, ...optionalParams: any[]): void
}
// alias for susceptibilities ;)
type ServerLogger = Log4jLogger

	interface NpmLogger {
	error(message?: any, ...optionalParams: any[]): void
	warn(message?: any, ...optionalParams: any[]): void
	info(message?: any, ...optionalParams: any[]): void
	debug(message?: any, ...optionalParams: any[]): void
	verbose(message?: any, ...optionalParams: any[]): void
	silly(message?: any, ...optionalParams: any[]): void
}

interface AngularJSLogger {
	error(message?: any, ...optionalParams: any[]): void
	warn(message?: any, ...optionalParams: any[]): void
	info(message?: any, ...optionalParams: any[]): void
	debug(message?: any, ...optionalParams: any[]): void
}

export {
	SimpleLogger,
	JSConsoleLogger,
	SyslogLogger,
	Log4jLogger,
	ServerLogger,
	NpmLogger,
	AngularJSLogger,
}
