import logger from "../../utils/logger";
import { t } from "testcafe";
import { Device, DeviceRefined } from "../../types/deviceTypes";

/**
 * Verifies that the provided API response data is an array.
 *
 * This function checks if the `apiResponseData` is an array using `Array.isArray()`,
 * and logs a success message if the data is indeed an array. If the data is not an array,
 * it asserts a failure with a message that includes the endpoint.
 *
 * @param {TestController} t - The TestCafe `TestController` instance used for assertions.
 * @param {string} endpoint - The endpoint associated with the API response.
 * @param {object} apiResponseData - The API response data to be verified.
 * @returns {Promise<void>} A promise that resolves when the verification and logging are complete.
 */
export const verifyTypeOfArray = async (
  endpoint: string,
  apiResponseData: object,
): Promise<void> => {
  await t
    .expect(Array.isArray(apiResponseData))
    .ok(`The ${endpoint} response data is not an array`);
  logger.info(
    `--- SUCCESS: Data obtained from API ${endpoint} call is an array`,
  );
};

/**
 * Asserts that the sorted API data matches the sorted UI data.
 *
 * This function checks if the sorted API data is equal to the sorted UI data
 * and throws an error if they do not match. If the data matches, it logs a success message.
 *
 * @param {any[]} sortedApiData - The sorted data obtained from the API.
 * @param {any[]} sortedUiData - The sorted data obtained from the UI.
 * @returns {Promise<void>} A promise that resolves when the assertion and logging are complete.
 */
export const assertDataEquality = async (
  sortedApiData: DeviceRefined[],
  sortedUiData: DeviceRefined[],
): Promise<void> => {
  await t
    .expect(sortedApiData)
    .eql(sortedUiData, "API and UI data do not match");
  logger.info("--- The compared data are equal");
};

/**
 * Asserts that the obtained device data from the API is not empty.
 * Logs the number of devices obtained from the API call if the array is not empty.
 *
 * @param obtainedDeviceData - The array of `Device` objects obtained from the API.
 * @param endpoint - The endpoint of the API call that was used to retrieve the data.
 */
export const assertObtainedDataFromApiNotEmpty = async (
  obtainedDeviceData: Device[],
  endpoint: string,
): Promise<void> => {
  await t
    .expect(obtainedDeviceData.length)
    .gt(0, `--- API ${endpoint} call returned an empty array`);
  logger.info(
    `--- API ${endpoint} call returned data with ${obtainedDeviceData.length} ${endpoint}`,
  );
};

/**
 * Verifies if the new device name is displayed in the UI.
 *
 * This function checks if the `deviceInfoText` is included in the
 * `deviceNamesArray` and asserts that the new device name is displayed.
 *
 * @param {string[]} deviceNamesArray - An array of device names displayed in the UI.
 * @param {string} deviceInfoText - The name of the new device to verify.
 * @returns {Promise<void>} A promise that resolves when the verification is complete.
 */
export const verifyNewDeviceFromUi_ = async (
  deviceNamesArray: string[],
  deviceInfoText: string,
): Promise<void> => {
  const isDeviceDisplayed = deviceNamesArray.includes(deviceInfoText);
  await t.expect(isDeviceDisplayed).ok("The new device is not displayed");
  logger.info(`--- The new device is displayed on the home page`);
};
