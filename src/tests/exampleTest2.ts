fixture`Simple Test`.page("https://google.com.co");

test("Log message", async (t) => {
  console.log("--- This is a simple log message");
  await t.expect(true).ok();
});
