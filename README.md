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
- [ ] Fix scripts test name on the reports
- [ ] Check the best practice to work with separate locators file

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
