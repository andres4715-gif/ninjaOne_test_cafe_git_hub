import { config } from "dotenv";
config();

const { URL } = process.env;

fixture`Global Setup`.page(URL as string).beforeEach(async (t) => {});
