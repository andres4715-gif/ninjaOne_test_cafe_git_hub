![image](https://github.com/andres4715-gif/ninjaOne_test_cafe_git_hub/assets/69942140/7efc2255-3099-420f-8a46-042e00de376a)

# TestCafe TypeScript API and UI Framework 


This is a TestCafe automation testing framework using TypeScript. It is set up to compile TypeScript code to JavaScript and run tests in TestCafe. 

## Project Structure

![image](https://github.com/andres4715-gif/ninjaOne_test_cafe_git_hub/assets/69942140/b837dd79-53eb-47a0-b85e-fbcb21c02034)

## Prerequisites

- Node.js (You can download it from [here](https://nodejs.org/))
- npm (comes with Node.js)

# Initial steps to run the services(Backend) and UI(Frontend):

## Run the backend services: 
```shell
- Step 1: Open a new terminal
- Step 2: $ Clone de repository: https://github.com/NinjaRMM/devicesTask_serverApp
- Step 3: $ npm install
- Step 4: $ npm start
- Step 5: Leave this running 
```

## Run the frontend: 
```shell
- Step 1: Open a new terminal
- Step 2: $ Clone de repository: https://github.com/Yastrenky/devices-clientapp
- Step 3: $ npm install
- Step 4: $ npm start
- Step 5: Leave this running 
```

## Run the TestCafe automation: 
```shell
- Step 1: Open a new terminal
- Step 2: $ Clone de repository: https://github.com/andres4715-gif/ninjaOne_test_cafe_git_hub.git
- Step 4: $ cd testcafe-typescript-framework
- Step 3: $ npm install
```


## Running the NPM Scripts:
```shell
- Quick execution: 
$ npm run watch
$ npm run test

- This will:

1. Compile the TypeScript code using the build script.
2. Run the tests in TestCafe using the compiled JavaScript files.
```
___
# Reports: 

> NPM PACKAGE:  "testcafe-reporter-html": "^1.4.6",

To get the final execution report just run this npm script. 
```shell
$ npm run test
```

### Required Report configuration to get the testcafe-reporter-html Report
```text
--reporter spec,html:reports/test-report.html --screenshots path=reports/screenshots/$(date +%Y-%m-%d_%H-%M-%S),takeOnFails=true",
```
This specific script contains the testcafe-reporter-html complement to create a new report each execution and you can 
see the test-report.html on this project folder: ./reports

NOTE: Just open this file: reports/test-report.html using any available browser in your system. 

Besides you would see the fail execution screenshots each fail execution in this folder: ./reports/screenshots
___

# Logger: Winston Logging in Node.js


> Winston  is the most popular logging library for Node.js. 
>It aims to make logging more flexible and extensible by decoupling different aspects such as log levels, 
>formatting, and storage so that each API is independent and many combinations are supported.

*This TestCafe framework just applying the basic configuration for logger*

Check this link for more information: [LInk](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/)

### PATH: 
```text
src/utils/logger.ts
```

### Common Logger Methods

```javascript
logger.info('This is an informational message');
logger.error('This is an error message');
logger.warn('This is a warning message');
logger.debug('This is a debug message');
logger.verbose('This is a verbose message');
logger.silly('This is a silly message'); which are the most detailed and least critical.
```
___


# Additional Configuration
## Linter (Optional)
To add ESLint for code linting, install the following packages:

```shell
$ npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

Create an .eslintrc.json file:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    // Your custom rules
  }
}

```

Code Formatter (Optional)
To add Prettier for code formatting, install the following packages:

```shell
$ npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

```

Update .eslintrc.json:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ]
}
```

# TO DO:
👌


# FRAMEWORK TASK DONE
- [X] Run the initial base script
- [X] Clone and run UI Repository 
- [X] Clone and run API Repository
- [X] Solve node issue error to run the UI app
- [X] Create the TestCafe framework working with Typescript
- [X] Readme file Documentation about TypeScript validation on the real time 
- [X] Setup the url from .env file
- [X] Setup tsc --watch
- [X] Run the next scripts if the previous fails. 
- [X] Remove .page()to whole list of test cases and add it in a global variable
- [X] Manage logs
- [X] Check and run the reports
- [X] github actions setup
- [X] Fix scripts test name on the reports
- [X] Verify the testcafe-reporter.ts functionality and remove it if needed
- [X] Create new readme version file adding documentation for reports
- [X] Create new readme version file adding documentation for github actions
- [X] Install npm package to handle logs
- [X] Create new readme version file adding documentation for logs

# SCRIPTS TASK DONE
- [X] Check the best practice to work with separate locators file
- [X] Check the final env variables and clean it
- [X] Remove the basic and demo initial script