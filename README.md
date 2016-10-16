# Tray.io connector test automation framework

This test frameworks demonstrates a scalable and easy-to-use approach to automating Tray.io's connector components. It will run on any OS supported by NodeJS and can be integrated into a CI setup.

### Technology used

The test framework runs as a NodeJS application and uses the Jasmine BDD framework 2.5 for organizing and running tests.
It's written in ES6 and uses some features introduced in ES6 (string literals, classes, promises etc.). The NodeJS HTTPS module is used for API calls.

### Running the tests locally

Run the test suite locally via the following steps:

1. Install the latest version of NodeJS: https://nodejs.org/en/download/

2. Clone or download the tray.io automation project from github

3. Install the npm project dependencies by running CL 'npm install' in the project folder. Details: https://docs.npmjs.com/cli/install

4. Use jasmine runner to kickoff the test suite. If you first install jasmine globally via CL 'npm install -g jasmine' you can then run CL 'jasmine' in the project folder. Details: http://jasmine.github.io/2.0/node.html

In short: 1) Install Node 2) Download/clone project 3) Run CL 'npm install' 4) run CL 'npm install -g jasmine' 5) CL 'jasmine' in project folder to run test suite

### Project stucture

The jasmine spec files that list and defined the test cases are under /spec/connectors. /lib folder houses the interal, reusable logic of the framework. The jasmine settings are under /spec/support/jasmine.json
	
### Managing and extending the framework

The tests for each connector should be stored in their spec file under /spec/connectors. In turn each message supported by the connector should be under its own "describe" heading in the spec file. Different input test cases should be 'it' headings nested in their respective "describe" (message) heading.

The specs obviousy share a similar format (feed some input, check for anticipated output). A utility can be created to parse a connector's description and generate a spec file stub from it. A user can then quickly go through this stub and fill out the intended inputs and outputs and add additional logic and test cases where necessary. In this way a lot of connectors can be automated quickly. 
 

#### Adding new tests in a new spec file

Create a new js file ending in spec.js and put it under /spec/connectors. It will automatically get executed by jasmine on your next test run

#### Adding new tests in an existing spec file

Simply add the intended suite (describe) or spec (it) in the file. Details: http://jasmine.github.io/2.5/introduction.html
#### Disabling failing test cases

It is common for specs or entire suites to fail. They should be disabled (marked as pending) with the reason described inline. If a bug is associated its ID should be included inline and the spec should be reactivated when the bug is marked as resolved. Example:

```javascript
  xit('should return true for prime number', function (){
	//doStuff
  }).pend("Disabled because of BugID:55416");
```

Details: http://jasmine.github.io/2.5/introduction.html#section-Disabling_Suites
http://jasmine.github.io/2.5/introduction.html#section-Pending_Specs

### Jenkins integration

Jasmine will not natively output results in a Jenkins-friendly format (e.g. junit).
There's plenty of plugins to solve this. The easiest solution I found is to use jasmine-node instead of vanilla jasmine: https://github.com/mhevery/jasmine-node

It's identical to the vanilla jasmine runner but doesn't support Jasmine versions higher than 1.3 (we use 2.5 by default). So we need to remove 'beforeAll' clause and the 'pend' functions from our spec file since those are not supported in 1.3. 

From there it's simple. Step by step (on Windows): 

1. Add jasmine-node as a dependency in the node test project

2. Create new Jenkins freestyle project

3. In Jenkins configure the test framework source code to be pulled into the Jenkins workspace

5. In Jenkins add a new build step 'Execute Windows batch command': "npm install"

6. Add a subsequent build step 'Execute Windows batch command': 'node "workspace\node_modules\jasmine-node\bin\jasmine-node" --verbose --junitreport spec' - where workspace is your jenkins project workspace folder

7. Add a new Post-build action "Publish JUnit test result report" with 'Test report XMLs' configured as "**/reports/*.xml" (assuming a default configuration)

And that's it: you're done: http://screencast.com/t/JWqt5cfqi1v






