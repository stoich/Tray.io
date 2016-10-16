"use strict";
var https = require('https');

module.exports = class Connector {

    constructor(baseUrl, details, requestId) {
        this.baseUrl = baseUrl;
        this.details = details;
        this.requestId = requestId;

        this.httpsOptions = {
            host: this.baseUrl,
            path: '/prod',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        };
    }

    sendMessage(messageName, properties) {
        var _this = this;
        var properties = properties || {};

        var propertiesAsString = JSON.stringify(properties);

        var body = `[ { "id": "${this.requestId}",
         "header": { "message": "${messageName}" },
          "body":  ${propertiesAsString} }]`;

        return new Promise(function (resolve, reject) {

            var req = https.request(_this.httpsOptions, function (res) {
                var response = "";
                res.setEncoding('utf8');

                res.on('data', function (chunk) {
                    response += chunk;
                });

                res.on('end', function () {
                    resolve(response);
                    console.log("End received!");
                });
            });

            req.on('error', function (e) {
                console.log('problem with request: ' + e.message);
                reject(e.message);
            });

            console.log(body);
            req.write(body);
            req.end();

        });
    }

    buildValidOutput(expectedValues) {

        var response = [
            {
                "id": this.requestId,
                "header": {},
                "body": expectedValues
            }];

        return JSON.stringify(response);
    }

    buildMissingParametersOutput(messageName) {
        var required = this.getRequiredParameters(messageName);
        var body = {
            "code": "invalid_input",
            "message": `The following required parameters are missing: ${required}`
        };

        var response = [
            {
                "id": this.requestId,
                "header": {"error": true},
                "body": body
            }];

        return JSON.stringify(response);
    }

    getRequiredParameters(messageName) {
        var messages = this.details['messages'];

        var currentMessage = messages.find(msg => msg.name === messageName);

        return currentMessage['input_schema']['required'].join(', ');
    }

}