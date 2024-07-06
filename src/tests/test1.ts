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

  logger.info("--- Interac with the object");
  console.log("****** 0", responseDevices[0]);
  console.log("****** 1", responseDevices[1]);
  console.log("****** 2", responseDevices[2]);
});

// todo check the return to get values of variables.
