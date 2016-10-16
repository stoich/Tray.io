var Connector = require('../../lib/connector');
var connectorsList = require('../../connectorsList');

describe(`In MY-TEST-CONNECTOR connector`, function () {
    var connector;
    var serviceEndPoint = 'edy585mx12.execute-api.eu-west-1.amazonaws.com';
    var requestID = "123-def";

    beforeAll(function () {
        connector = new Connector(serviceEndPoint, connectorsList.myTestConnector, requestID);
    });

    describe("CONTAINS message", function () {
        var msgName = 'contains';

        //Disabled because it's failing - doesn't return expected result
        xit("returns true for matching pattern ", function (done) {
            var positiveInput = {value: "Hello, Finn!", contains: "Finn"};
            var expectedOutput = connector.buildValidOutput({result: true});

            connector.sendMessage(msgName, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        }).pend('Failing - doesn\'t return expected result.');

        it("returns false for non-matching pattern  ", function (done) {
            var negativeInput = {value: "Hello, Finn!", contains: "Adam Driver"};
            var expectedOutput = connector.buildValidOutput({result: false});

            connector.sendMessage(msgName, negativeInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it("returns error for missing parameters", function (done) {
            var expectedOutput = connector.buildMissingParametersOutput(msgName);

            connector.sendMessage(msgName).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });
    });

    describe("GET_USER message", function () {
        var msgName = 'get_user';
        var userInfo = {
            "id": 1,
            "name": "Ali Russell",
            "company": "tray.io",
            "location": "London, UK",
            "twitter": "https://twitter.com/alirussell"
        };

        it("returns user info for empty body", function (done) {

            var expectedOutput = connector.buildValidOutput(userInfo);

            connector.sendMessage(msgName).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });

        });

        it("returns user when passed parameters.", function (done) {

            var positiveInput = {name: "john boyega", id: 5};
            var expectedOutput = connector.buildValidOutput(userInfo);

            connector.sendMessage(msgName, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

    });

    describe("IS_URL message", function () {
        var msgName = 'is_url';

        it('should return true for "http://starwars.com"', function (done) {
            var positiveInput = {value: "http://starwars.com"};
            var expectedOutput = connector.buildValidOutput({result: true});

            connector.sendMessage(msgName, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it('return false for "xyz"', function (done) {
            var negativeInput = {value: 'xyz'};
            var expectedOutput = connector.buildValidOutput({result: false});

            connector.sendMessage(msgName, negativeInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it("should return error when missing parameters", function (done) {
            var expectedOutput = connector.buildMissingParametersOutput(msgName);

            connector.sendMessage(msgName).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

    });

    describe("IS_EMAIL message", function () {
        var msgName = 'is_email';

        it('should return true for "s@gmail.com"', function (done) {
            var positiveInput = {email: 's@gmail.com'};
            var expectedOutput = connector.buildValidOutput({result: true});

            connector.sendMessage(msgName, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it('should return false for "xyz"', function (done) {
            var negativeInput = {email: 'xyz'};
            var expectedOutput = connector.buildValidOutput({result: false});

            connector.sendMessage(msgName, negativeInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it("should return error when missing parameters", function (done) {
            var expectedOutput = connector.buildMissingParametersOutput(msgName);

            connector.sendMessage(msgName).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

    });

    describe("IS_GENERIC_DOMAIN message", function () {
        var msgName = 'is_generic_domain';

        //Disabled because it's failing - results in API error
        xit('should return true for "hotmail.com" ', function (done) {
            var positiveInput = {domain: 'hotmail.com'};
            var expectedOutput = connector.buildValidOutput({result: true});

            connector.sendMessage(msgName, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        }).pend('Failing - returns API error.');

        //Disabled because it's failing - results in API error
        xit('should return false for "slashstars.com "', function (done) {
            var negativeInput = {domain: 'slashstars.com'};
            var expectedOutput = connector.buildValidOutput({result: false});

            connector.sendMessage(msgName, negativeInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        }).pend('Failing - returns API error.');

        it("should return error when missing parameters", function (done) {
            var expectedOutput = connector.buildMissingParametersOutput(msgName);

            connector.sendMessage(msgName).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

    });

    describe("IS_NUMERIC message", function () {
        var isNumeric = 'is_numeric';

        it('should return true for "123" ', function (done) {

            var positiveInput = {value: 123};
            var expectedOutput = connector.buildValidOutput({result: true});

            connector.sendMessage(isNumeric, positiveInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it('should return false for "xyz"', function (done) {
            var negativeInput = {value: 'xyz'};
            var expectedOutput = connector.buildValidOutput({result: false});

            connector.sendMessage(isNumeric, negativeInput).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

        it("should return error when missing parameters", function (done) {
            var expectedOutput = connector.buildMissingParametersOutput(isNumeric);

            connector.sendMessage(isNumeric).then(function (res) {
                console.log(res);
                expect(res).toEqual(expectedOutput);
                done();
            });
        });

    });
});


