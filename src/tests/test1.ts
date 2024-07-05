import "../utils/setup";
import logger from "../utils/logger";
import axios from "axios";

// env variables destructuring
const { URL } = process.env;

const dataDevices = {
  baseUrl: "http://localhost:3000",
  endpoint: "devices",
};

fixture`Test 1`.page(URL as string);
test("Make an API call to retrieve the list of devices", async (tc) => {
  const response = await axios.get(
    `${dataDevices.baseUrl}/${dataDevices.endpoint}`,
  );
  await tc.expect(response.status).eql(200, "--- API call failed");
  const devices = response.data;
  logger.info(`--- Devices: ${JSON.stringify(devices, null, 2)}`);
});
