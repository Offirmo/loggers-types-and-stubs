import { SimpleLogger, JSConsoleLogger, SyslogLogger, Log4jLogger, NpmLogger, AngularJSLogger } from './types';
declare const simpleLoggerToConsole: SimpleLogger;
declare const consoleLoggerToConsole: JSConsoleLogger;
declare const syslogLoggerToConsole: SyslogLogger;
declare const log4jLoggerToConsole: Log4jLogger;
declare const serverLoggerToConsole: Log4jLogger;
declare const npmLoggerToConsole: NpmLogger;
declare const angularJSLoggerToConsole: AngularJSLogger;
export { simpleLoggerToConsole, consoleLoggerToConsole, syslogLoggerToConsole, log4jLoggerToConsole, serverLoggerToConsole, npmLoggerToConsole, angularJSLoggerToConsole };
