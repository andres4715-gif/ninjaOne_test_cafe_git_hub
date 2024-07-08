import "../utils/setup";
import { logInfoJsonStringify } from "../common/utilities/helpers";
import {
  verifyTypeOfArray,
  assertDataEquality,
} from "../common/utilities/assertions";
import axios from "axios";
import { Device } from "../types/deviceTypes";
import homeSelectors from "../selectors/homeSelectors";
import logger from "../utils/logger";

// env variables destructuring
const { URL, BASEURL } = process.env;

const url = URL as string;
const baseUrl = BASEURL as string;

const endpoints = {
  devices: "devices",
};

fixture`Test 1`.page(url);

test("Make an API call to retrieve the list of devices and compare with UI", async (t) => {
  // Fetch data from API
  const response = await axios.get<Device[]>(`${baseUrl}${endpoints.devices}`);
  await t.expect(response.status).eql(200, "--- API call failed");
  const responseDevices: Device[] = response.data;
  verifyTypeOfArray(endpoints.devices, responseDevices);

  // Simplify the API response data
  const finalDeviceDataFromService = responseDevices.map(
    ({ id, ...rest }) => rest
  );

  // Fetch data from UI
  const deviceNameUi: Selector = homeSelectors.device_name;
  const deviceOptionUi: Selector = homeSelectors.device_option;
  const deviceInfos = await deviceNameUi
    .with({ boundTestRun: t })
    .count.then((count) =>
      Promise.all(
        Array.from({ length: count }).map(async (_, i) => {
          const hasEditButton = await deviceOptionUi
            .nth(i)
            .find('[class="device-edit"]')
            .with({ boundTestRun: t }).exists;
          const hasRemoveButton = await deviceOptionUi
            .nth(i)
            .find('[class="device-remove"]')
            .with({ boundTestRun: t }).exists;

          return {
            // Extract data
            system_name: await deviceNameUi
              .nth(i)
              .find(".device-name")
              .with({ boundTestRun: t }).innerText,
            type: await deviceNameUi
              .nth(i)
              .find(".device-type")
              .with({ boundTestRun: t }).innerText,
            hdd_capacity: await deviceNameUi
              .nth(i)
              .find(".device-capacity")
              .with({ boundTestRun: t }).innerText,
            // Validate buttons
            hasEditButton,
            hasRemoveButton,
          };
        }),
      ),
    );

  // Extract data for comparison, excluding button validation
  const finalDeviceDataFromUI = deviceInfos.map(
    ({ system_name, type, hdd_capacity }) => ({
      system_name,
      type,
      hdd_capacity: hdd_capacity.replace(" GB", ""), // Remove ' GB' for comparison
    }),
  );

  // Sort both arrays by system_name to ensure order doesn't affect comparison
  const sortedApiData = finalDeviceDataFromService.sort((a, b) =>
    a.system_name.localeCompare(b.system_name),
  );
  const sortedUiData = finalDeviceDataFromUI.sort((a, b) =>
    a.system_name.localeCompare(b.system_name),
  );

  // Compare the sorted arrays
  assertDataEquality(sortedApiData, sortedUiData);

  // Log the data in pretty format
  logInfoJsonStringify("API", sortedApiData, endpoints.devices);
  logInfoJsonStringify("UI", sortedUiData, "");

  // Verify that all devices in the UI have the required buttons
  for (const [index, deviceInfo] of deviceInfos.entries()) {
    await t
      .expect(deviceInfo.hasEditButton)
      .ok(`Device at index ${index} does not have an edit button`);
    logger.info(`Device at index ${index} has the edit button displayed"`);
    await t
      .expect(deviceInfo.hasRemoveButton)
      .ok(`Device at index ${index} does not have a remove button`);
    logger.info(`Device at index ${index} has the Remove button displayed"`);
  }
});
