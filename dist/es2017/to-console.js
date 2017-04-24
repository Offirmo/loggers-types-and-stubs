const log = console.log.bind(console);
const info = console.info.bind(console);
const warn = console.warn.bind(console);
const error = console.error.bind(console);
const alert = error;
const crit = error;
const debug = log;
const emerg = error;
const fatal = error;
const notice = info;
const silly = log;
const trace = log;
const verbose = log;
const warning = warn;
const simpleLoggerToConsole = {
    log,
    info,
    warn,
    error,
};
const consoleLoggerToConsole = console;
const syslogLoggerToConsole = {
    emerg,
    alert,
    crit,
    error,
    warning,
    notice,
    info,
    debug,
};
const log4jLoggerToConsole = {
    fatal,
    error,
    warn,
    info,
    debug,
    trace,
};
const serverLoggerToConsole = log4jLoggerToConsole;
const npmLoggerToConsole = {
    error,
    warn,
    info,
    debug,
    verbose,
    silly,
};
const angularJSLoggerToConsole = {
    error,
    warn,
    info,
    debug,
};
export { simpleLoggerToConsole, consoleLoggerToConsole, syslogLoggerToConsole, log4jLoggerToConsole, serverLoggerToConsole, npmLoggerToConsole, angularJSLoggerToConsole, };
//# sourceMappingURL=to-console.js.map