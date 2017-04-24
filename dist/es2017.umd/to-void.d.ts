import { SimpleLogger, JSConsoleLogger, SyslogLogger, Log4jLogger, NpmLogger, AngularJSLogger } from './types';
declare const simpleLoggerToVoid: SimpleLogger;
declare const consoleLoggerToVoid: JSConsoleLogger;
declare const syslogLoggerToVoid: SyslogLogger;
declare const log4jLoggerToVoid: Log4jLogger;
declare const serverLoggerToVoid: Log4jLogger;
declare const npmLoggerToVoid: NpmLogger;
declare const angularJSLoggerToVoid: AngularJSLogger;
export { simpleLoggerToVoid, consoleLoggerToVoid, syslogLoggerToVoid, log4jLoggerToVoid, serverLoggerToVoid, npmLoggerToVoid, angularJSLoggerToVoid };
