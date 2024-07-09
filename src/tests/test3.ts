import axios from "axios";
import { Device } from "../types/deviceTypes";
import logger from "../utils/logger";
import { generateRandomString } from "../common/utilities/helpers";
import homeSelectors from "../selectors/homeSelectors";
import { verifyNewDeviceFromUi_ } from "../common/utilities/assertions";

const endpoints = {
  devices: "devices",
};

const randomString = generateRandomString(10);

const { URL, BASEURL } = process.env;
const url = URL as string;
const BASE_URL = `${BASEURL}${endpoints.devices}`;

const PUT_BODY = {
  id: "e8okoP2l5",
  system_name: `DESKTOP-SMART-TEST-${randomString}`,
  type: "WINDOWS",
  hdd_capacity: "14",
};

fixture`Test 3`.page(url);
test("Make an API call that renames the first device in the UI", async (t) => {
  let id;
  try {
    const initialResponse = await axios.get(BASE_URL);
    console.log(`--- GET current devices list:\n`, initialResponse.data);
    id = initialResponse.data[0].id;
  } catch (error) {
    logger.error("Error performing GET request:", error);
    throw error;
  }

  // Perform PUT request to update data
  const deviceToBeChange = `${BASEURL}${endpoints.devices}/${id}`;
  console.log("--- Sent HTTP PUT Request: ", deviceToBeChange);
  try {
    await axios.put(deviceToBeChange, PUT_BODY);
  } catch (error) {
    logger.error("Error performing PUT request:", error);
    throw error;
  }
  // Refresh the page
  await t.eval(() => location.reload());

  const changeDevice = await axios.get(BASE_URL);
  const changedDevice = changeDevice.data.filter((x: Device) => x.id === id);
  logger.info(`--- Change device system_name: ${changedDevice[0].system_name}`);

  const deviceInfoNameUi: Selector = homeSelectors.homePageDeviceNameSelector;
  const deviceInfoText = await deviceInfoNameUi.innerText;
  const deviceCount = await deviceInfoNameUi.count;
  logger.info(`--- Number of devices displayed on the page: , ${deviceCount}`);
  const deviceNamesArray = [];

  for (let i = 0; i < deviceCount; i++) {
    const deviceName = await deviceInfoNameUi.nth(i).innerText;
    deviceNamesArray.push(deviceName);
  }
  logger.info(`--- Final list of devices from the UI: \n ${deviceNamesArray}`);
  verifyNewDeviceFromUi_(deviceNamesArray, deviceInfoText);
});
