import "../utils/setup";
import { logInfoJsonStringify } from "../common/utilities/helpers";
import { verifyTypeOfArray } from "../common/utilities/assertions";
import axios from "axios";
import logger from "../utils/logger";

// env variables destructuring
const { URL, BASEURL } = process.env;

const url = URL as string;
const baseUrl = BASEURL as string;

const endpoints = {
  devices: "devices",
};

fixture`Test 1`.page(url);
test("Make an API call to retrieve the list of devices", async (t) => {
  const response = await axios.get(`${baseUrl}${endpoints.devices}`);
  await t.expect(response.status).eql(200, "--- API call failed");
  const responseDevices = response.data;
  logInfoJsonStringify(endpoints.devices, responseDevices);
  verifyTypeOfArray(t, endpoints.devices, responseDevices);
});

test("Verify list of devices to check the elements are visible in the DOM", async () => {
  logger.info("----------------");
});
