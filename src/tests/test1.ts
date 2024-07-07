import "../utils/setup";
import { logInfoJsonStringify } from "../common/utilities/helpers";
import { verifyTypeOfArray } from "../common/utilities/assertions";
import axios from "axios";
// import logger from "../utils/logger";
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
test("Make an API call to retrieve the list of devices", async (t) => {
  const response = await axios.get<Device[]>(`${baseUrl}${endpoints.devices}`);
  await t.expect(response.status).eql(200, "--- API call failed");
  const responseDevices: Device[] = response.data;
  logInfoJsonStringify(endpoints.devices, responseDevices);
  verifyTypeOfArray(t, endpoints.devices, responseDevices);

  const deviceNameUi: Selector = homeSelectors.device_name;

  // Ensure the selector is used with the test controller
  logger.info(`--- Device info obtained from UI`);
  const deviceInfos = await deviceNameUi
    .with({ boundTestRun: t })
    .count.then((count) =>
      Promise.all(
        Array.from({ length: count }).map(async (_, i) => ({
          name: await deviceNameUi
            .nth(i)
            .find(".device-name")
            .with({ boundTestRun: t }).innerText,
          type: await deviceNameUi
            .nth(i)
            .find(".device-type")
            .with({ boundTestRun: t }).innerText,
          capacity: await deviceNameUi
            .nth(i)
            .find(".device-capacity")
            .with({ boundTestRun: t }).innerText,
        })),
      ),
    );

  console.log("--- Device Infos: ", deviceInfos);
});
