import "../utils/setup";
import { logInfoJsonStringify } from "../common/utilities/helpers";
import {
  verifyTypeOfArray,
  assertDataEquality,
} from "../common/utilities/assertions";
import axios from "axios";
import { Device } from "../types/deviceTypes";
import homeSelectors from "../selectors/homeSelectors";

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
  const deviceInfos = await deviceNameUi
    .with({ boundTestRun: t })
    .count.then((count) =>
      Promise.all(
        Array.from({ length: count }).map(async (_, i) => ({
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
        })),
      ),
    );

  // Simplify the UI response data
  const finalDeviceDataFromUI = deviceInfos.map(
    ({ hdd_capacity, ...rest }) => ({
      ...rest,
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
});
