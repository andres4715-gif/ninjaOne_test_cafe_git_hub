fixture`Simple Test`.page("https://google.com.co");

test("Log message", async (t) => {
  console.info("--- This is a simple log message");
  console.info("--- This is a simple log message second view");
  await t.expect(true).ok();
});
