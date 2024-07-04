import { Selector } from "testcafe";
import loginPage from "../pages/examplePage";

// env variables destructuring
const { URL, USERNAME, PASSWORD } = process.env;

fixture`Login Tests`.page(URL as string);

test("User can log in with valid credentials", async (t) => {
  await loginPage.login(USERNAME as string, PASSWORD as string);

  const loggedInUser = Selector("#flash-messages");
  await t.expect(loggedInUser.exists).ok();
});
