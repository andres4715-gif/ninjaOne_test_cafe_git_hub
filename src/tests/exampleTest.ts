import examplePage from "../pages/examplePage";

fixture`Example Fixture`.page`https://the-internet.herokuapp.com/checkboxes`;

test("Example Test", async (t) => {
  await t.expect(examplePage.exampleElement.exists).ok();
});
