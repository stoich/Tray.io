var Connector = require('../../lib/connector');
var connectors = require('../../connectorsDescriptions');

describe("The MY-TEST-CONNECTOR connector", function () {
    var connector;

    beforeAll(function () {
        connector = new Connector("edy585mx12.execute-api.eu-west-1.amazonaws.com", connectors.MyTestConnector, "123-def");
    });

    describe("IS_NUMERIC message", function () {

        fit("positive input", function (done) {
            var expectedJSON = '[{"id":"123-def","header":{},"body":{"result":true}}]';

            connector.sendMessage('is_numeric', {value: 123}).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedJSON);
                done();
            });
        });

    });
});


