var Connector = require('../../lib/connector');
var connectorsList = require('../../connectorsList');

describe(`The MY-TEST-CONNECTOR connector`, function () {
    var connector;
    var serviceEndPoint = 'edy585mx12.execute-api.eu-west-1.amazonaws.com';
    var requestID = "123-def";

    beforeAll(function () {
        connector = new Connector(serviceEndPoint, connectorsList.myTestConnector, requestID);
    });

    describe("IS_NUMERIC message", function () {
        var isNumeric = 'is_numeric';

        fit("positive input", function (done) {

            var positiveInput = {value: 123};
            var expectedOutput = connector.buildPositiveOutput({result: true});

            connector.sendMessage(isNumeric, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });

        });

    });

    describe("GET_USER message", function () {
        var getUser = 'get_user';

        fit("positive input", function (done) {
            var userInfo = {
                "id": 1,
                "name": "Ali Russell",
                "company": "tray.io",
                "location": "London, UK",
                "twitter": "https://twitter.com/alirussell"
            };

            var expectedOutput = connector.buildPositiveOutput(userInfo);

            connector.sendMessage(getUser).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });

        });

    });
});


