(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.simpleLoggerToConsole = simpleLoggerToConsole;
    const consoleLoggerToConsole = console;
    exports.consoleLoggerToConsole = consoleLoggerToConsole;
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
    exports.syslogLoggerToConsole = syslogLoggerToConsole;
    const log4jLoggerToConsole = {
        fatal,
        error,
        warn,
        info,
        debug,
        trace,
    };
    exports.log4jLoggerToConsole = log4jLoggerToConsole;
    const serverLoggerToConsole = log4jLoggerToConsole; // alias
    exports.serverLoggerToConsole = serverLoggerToConsole;
    const npmLoggerToConsole = {
        error,
        warn,
        info,
        debug,
        verbose,
        silly,
    };
    exports.npmLoggerToConsole = npmLoggerToConsole;
    const angularJSLoggerToConsole = {
        error,
        warn,
        info,
        debug,
    };
    exports.angularJSLoggerToConsole = angularJSLoggerToConsole;
    const bunyanLoggerToConsole = {
        fatal: (x, ...args) => fatal(...bunyan_args_harmonizer(x, ...args)),
        error: (x, ...args) => error(...bunyan_args_harmonizer(x, ...args)),
        warn: (x, ...args) => warn(...bunyan_args_harmonizer(x, ...args)),
        info: (x, ...args) => info(...bunyan_args_harmonizer(x, ...args)),
        debug: (x, ...args) => debug(...bunyan_args_harmonizer(x, ...args)),
        trace: (x, ...args) => trace(...bunyan_args_harmonizer(x, ...args)),
    };
    exports.bunyanLoggerToConsole = bunyanLoggerToConsole;
    function bunyan_args_harmonizer(arg1, ...other_args) {
        if (arg1 instanceof Error) {
            const err = arg1;
            return other_args.concat({ err });
        }
        if (typeof arg1 !== 'string') {
            const details = arg1;
            return other_args.concat(details);
        }
        // no change
        return [arg1].concat(...other_args);
    }
    const compatibleLoggerToConsole = {
        alert,
        crit,
        debug,
        emerg,
        error,
        fatal,
        info,
        log,
        notice,
        silly,
        trace,
        verbose,
        warn,
        warning,
    };
    exports.compatibleLoggerToConsole = compatibleLoggerToConsole;
});
//# sourceMappingURL=to-console.js.map