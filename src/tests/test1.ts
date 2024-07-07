import "../utils/setup";
import {
  logInfoJsonStringify,
  logInfoJsonStringifyFromUi,
} from "../common/utilities/helpers";
import { verifyTypeOfArray } from "../common/utilities/assertions";
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
test("Make an API call to retrieve the list of devices", async (t) => {
  const response = await axios.get<Device[]>(`${baseUrl}${endpoints.devices}`);
  await t.expect(response.status).eql(200, "--- API call failed");
  const responseDevices: Device[] = response.data;
  verifyTypeOfArray(t, endpoints.devices, responseDevices);
  const finalDeviceDataFromService = responseDevices.map(
    ({ id, ...rest }) => rest
  );
  logInfoJsonStringify("API", endpoints.devices, finalDeviceDataFromService);

  const deviceNameUi: Selector = homeSelectors.device_name;

  // Ensure the selector is used with the test controller
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
  logInfoJsonStringifyFromUi("UI", deviceInfos);
});
