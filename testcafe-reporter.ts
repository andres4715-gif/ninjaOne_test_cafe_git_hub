import { config } from "dotenv";

fixture`Global Setup`.before(async (ctx) => {
  config();
});
