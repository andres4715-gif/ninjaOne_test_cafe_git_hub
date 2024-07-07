import "../utils/setup";
import logger from "../utils/logger";
import loginSelectors from "../selectors/loginSelectors";
import loginPage from "../pages/loginTestPage";
import { generateRandomString } from "../common/utilities/helpers";

// env variables destructuring
const { URL, USERNAME, PASSWORD } = process.env;

fixture`Simple login authentication`.page(URL as string);

test.skip("User can log in with valid credentials", async (t) => {
  await loginPage.login(USERNAME as string, PASSWORD as string);
  const randomString = generateRandomString(10);
  logger.info("--- The final random string:", randomString);
  const loggedInUser = loginSelectors.message_after_login;
  await t.expect(loggedInUser.exists).ok();
});
