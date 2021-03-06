// **********************************************************************
// Parsed By TarsParser(1.1.0), Generated By tars2node(20190529)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "node.tars" by Client Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _makeError = function (data, message, type) {
    var error = new Error(message || "");
    error.request = data.request;
    error.response = {
        "costtime" : data.request.costtime
    };
    if (type === TarsError.CLIENT.DECODE_ERROR) {
        error.name = "DECODE_ERROR";
        error.response.error = {
            "code" : type,
            "message" : message
        };
    } else {
        error.name = "RPC_ERROR";
        error.response.error = data.error;
    }
    return error;
};

var Demo = Demo || {};
module.exports.Demo = Demo;

Demo.HelloProxy = function () {
    this._name    = undefined;
    this._worker  = undefined;
};

Demo.HelloProxy.prototype.setTimeout = function (iTimeout) {
    this._worker.timeout = iTimeout;
};

Demo.HelloProxy.prototype.getTimeout = function () {
    return this._worker.timeout;
};

Demo.HelloProxy.prototype.setVersion = function (iVersion) {
    this._worker.version = iVersion;
};

Demo.HelloProxy.prototype.getVersion = function () {
    return this._worker.version;
};

var __Demo_Hello$ping$IF = {
    "name" : "ping",
    "return" : "string",
    "arguments" : []
};

var __Demo_Hello$ping$IE = function () {
    var os = new TarsStream.TarsOutputStream();
    return os.getBinBuffer();
};

var __Demo_Hello$ping$ID = function (data) {
    try {
        var is = new TarsStream.TarsInputStream(data.response.sBuffer);
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : is.readString(0, true, "")
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Demo_Hello$ping$PE = function (__$PROTOCOL$VERSION) {
    var tup = new TarsStream.UniAttribute();
    tup.tupVersion = __$PROTOCOL$VERSION;
    return tup;
};

var __Demo_Hello$ping$PD = function (data) {
    try {
        var tup = data.response.tup;
        return {
            "request" : data.request,
            "response" : {
                "costtime" : data.request.costtime,
                "return" : tup.readString("", "")
            }
        };
    } catch (e) {
        throw _makeError(data, e.message, TarsError.CLIENT.DECODE_ERROR);
    }
};

var __Demo_Hello$ping$ER = function (data) {
    throw _makeError(data, "Call Hello::ping failed");
};

Demo.HelloProxy.prototype.ping = function () {
    var version = this._worker.version;
    if (version === TarsStream.Tup.TUP_SIMPLE || version === TarsStream.Tup.TUP_COMPLEX) {
        return this._worker.tup_invoke("ping", __Demo_Hello$ping$PE(version), arguments[arguments.length - 1], __Demo_Hello$ping$IF).then(__Demo_Hello$ping$PD, __Demo_Hello$ping$ER);
    } else {
        return this._worker.tars_invoke("ping", __Demo_Hello$ping$IE(), arguments[arguments.length - 1], __Demo_Hello$ping$IF).then(__Demo_Hello$ping$ID, __Demo_Hello$ping$ER);
    }
};
Demo.HelloProxy.ping = __Demo_Hello$ping$IF;



