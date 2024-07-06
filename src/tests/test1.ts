import "../utils/setup";
import { logInfoJsonStringify } from "../common/utilities/helpers";
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
  const responseDevices = response.data;
  logInfoJsonStringify(endpoints.devices, responseDevices);
});
