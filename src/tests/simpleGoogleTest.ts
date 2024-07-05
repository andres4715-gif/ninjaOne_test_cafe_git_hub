fixture`Simple Google Test`.page("https://google.com.co");

test("Log message", async (t) => {
  console.info("--- This is a simple log message test");
  await t.expect(true).ok();
});
