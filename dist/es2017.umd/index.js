(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./to-console", "./to-void"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var to_console_1 = require("./to-console");
    exports.simpleLoggerToConsole = to_console_1.simpleLoggerToConsole;
    exports.consoleLoggerToConsole = to_console_1.consoleLoggerToConsole;
    exports.syslogLoggerToConsole = to_console_1.syslogLoggerToConsole;
    exports.log4jLoggerToConsole = to_console_1.log4jLoggerToConsole;
    exports.serverLoggerToConsole = to_console_1.serverLoggerToConsole;
    exports.npmLoggerToConsole = to_console_1.npmLoggerToConsole;
    exports.angularJSLoggerToConsole = to_console_1.angularJSLoggerToConsole;
    var to_void_1 = require("./to-void");
    exports.simpleLoggerToVoid = to_void_1.simpleLoggerToVoid;
    exports.consoleLoggerToVoid = to_void_1.consoleLoggerToVoid;
    exports.syslogLoggerToVoid = to_void_1.syslogLoggerToVoid;
    exports.log4jLoggerToVoid = to_void_1.log4jLoggerToVoid;
    exports.serverLoggerToVoid = to_void_1.serverLoggerToVoid;
    exports.npmLoggerToVoid = to_void_1.npmLoggerToVoid;
    exports.angularJSLoggerToVoid = to_void_1.angularJSLoggerToVoid;
});
//# sourceMappingURL=index.js.map