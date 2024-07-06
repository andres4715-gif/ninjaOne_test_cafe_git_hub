import "../utils/setup";
import logger from "../utils/logger";
import axios from "axios";

// env variables destructuring
const { URL, BASEURL } = process.env;

const url = URL as string;
const baseUrl = BASEURL as string;

const endpoints = {
  devices: "devices",
};

fixture`Test 1`.page(url);
test("Make an API call to retrieve the list of devices", async (tc) => {
  const response = await axios.get(`${baseUrl}${endpoints.devices}`);
  await tc.expect(response.status).eql(200, "--- API call failed");
  const devices = response.data;
  logger.info(`--- List of Devices: ${JSON.stringify(devices, null, 2)}`);
});
