![image](https://github.com/andres4715-gif/ninjaOne_test_cafe_git_hub/assets/69942140/7efc2255-3099-420f-8a46-042e00de376a)

# TestCafe TypeScript API and UI Framework 


This is a TestCafe automation testing framework using TypeScript. It is set up to compile TypeScript code to JavaScript and run tests in TestCafe. 

## Project Structure

![image](https://github.com/andres4715-gif/ninjaOne_test_cafe_git_hub/assets/69942140/b837dd79-53eb-47a0-b85e-fbcb21c02034)

## Prerequisites

- Node.js (You can download it from [here](https://nodejs.org/))
- npm (comes with Node.js)

## Setup

1. **Clone the repository:**
   ```shell
   $ git clone https://github.com/andres4715-gif/ninjaOne_test_cafe_git_hub.git
   $ cd testcafe-typescript-framework
   $ npm install
   ```
Usage
Compile TypeScript code
To compile the TypeScript code, run:
```shell
$ npm run build
```

## Run Tests
```shell
- Quick execution: 
$ npm run test

- Run specific script: (Take in mind, you would need to add the JavaScript code from dist folder)

* Example: 
$ npx testcafe chrome dist/tests/exampleTest.js

- Using tsc --watch real time TypeScript validation
$ npm run watch

- In another terminal tap run the test cases: 
* Example: 
$ npm run watch
$ npm run test
```

This will:

1. Compile the TypeScript code using the build script.
2. Run the tests in TestCafe using the compiled JavaScript files.

Example Test
The following is an example test located in src/tests/exampleTest.ts:

```javascript
import { Selector } from 'testcafe';
import examplePage from '../pages/examplePage';

fixture `Example Fixture`
    .page `https://example.com`;

test('Example Test', async t => {
    await t
        .expect(examplePage.exampleElement.exists).ok();
});

```

Example Page Object
The following is an example page object located in src/pages/examplePage.ts:

```javascript
import { Selector } from 'testcafe';

class ExamplePage {
    exampleElement: Selector;

    constructor() {
        this.exampleElement = Selector('#example');
    }
}

export default new ExamplePage();

```

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

# Github Actions: 

This TestCafe framework executes a github Action each push and pull request to master branch 

* Setup: Check this file: .github/workflows/node.js.yml

```YAML
on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
```
Besides is possible to download the final report on the Artifacts section after a success execution. 
___

Additional Configuration

Linter (Optional)
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

- [ ] Check the final env variables and clean it
- [ ] Create hooks to run the scripts
- [ ] Remove the basic and demo initial script
- [ ] Check the best practice to work with separate locators file
- [ ] Install npm package to handle logs
- [ ] Create new readme version file adding documentation for logs


# DONE
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

👍🏻👌