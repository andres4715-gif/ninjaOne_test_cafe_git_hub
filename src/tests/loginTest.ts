import "../globalSetup";
import { Selector } from "testcafe";
import loginPage from "../pages/loginTestPage";
import { generateRandomString } from "../common/utilities/helpers";

// env variables destructuring
const { USERNAME, PASSWORD } = process.env;

test("User can log in with valid credentials", async (t) => {
  await loginPage.login(USERNAME as string, PASSWORD as string);
  const randomString = generateRandomString(10);
  console.info("--- The final random string is:", randomString);

  const loggedInUser = Selector("#flash-messages");
  await t.expect(loggedInUser.exists).ok();
});
