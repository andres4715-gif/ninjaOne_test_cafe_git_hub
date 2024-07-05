import "../utils/setup";
import logger from "../utils/logger";
import { Selector } from "testcafe";
import loginPage from "../pages/loginTestPage";
import { generateRandomString } from "../common/utilities/helpers";

// env variables destructuring
const { URL, USERNAME, PASSWORD } = process.env;

fixture`Simple login authentication`.page(URL as string);

test("User can log in with valid credentials", async (t) => {
  await loginPage.login(USERNAME as string, PASSWORD as string);
  const randomString = generateRandomString(10);
  logger.info("--- The final random string:", randomString);
  const loggedInUser = Selector("#flash-messages");
  await t.expect(loggedInUser.exists).ok();
});
