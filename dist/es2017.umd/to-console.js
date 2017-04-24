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
    const serverLoggerToConsole = log4jLoggerToConsole;
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
});
//# sourceMappingURL=to-console.js.map