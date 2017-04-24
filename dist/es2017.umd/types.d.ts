interface SimpleLogger {
    log(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
declare type JSConsoleLogger = Console;
interface SyslogLogger {
    emerg(message?: any, ...optionalParams: any[]): void;
    alert(message?: any, ...optionalParams: any[]): void;
    crit(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    warning(message?: any, ...optionalParams: any[]): void;
    notice(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
}
interface Log4jLogger {
    fatal(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    trace(message?: any, ...optionalParams: any[]): void;
}
declare type ServerLogger = Log4jLogger;
interface NpmLogger {
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    verbose(message?: any, ...optionalParams: any[]): void;
    silly(message?: any, ...optionalParams: any[]): void;
}
interface AngularJSLogger {
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
}
export { SimpleLogger, JSConsoleLogger, SyslogLogger, Log4jLogger, ServerLogger, NpmLogger, AngularJSLogger };
