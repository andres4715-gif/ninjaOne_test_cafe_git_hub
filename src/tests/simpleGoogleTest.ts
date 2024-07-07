import logger from "../utils/logger";

fixture`Simple Google Test`.page("https://google.com.co");

test.skip("Log message", async (t) => {
  logger.info("--- This is a simple log message test");
  await t.expect(true).ok();
});
