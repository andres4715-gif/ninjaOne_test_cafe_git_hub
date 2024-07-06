import logger from "../../utils/logger";

/**
 * Generates a random string of the specified length.
 *
 * This function uses `Math.random()` to generate a random number,
 * converts it to a base-36 string (which includes letters and numbers),
 * and then extracts a substring of the specified length.
 *
 * @param {number} length - The desired length of the random string.
 * @returns {string} A random string of the specified length.
 */
export const generateRandomString = (length: number): string => {
  const newRandomString = Math.random().toString(36).substring(2, length);
  console.info("--- The obtained random string is:", newRandomString);
  return newRandomString;
};

/**
 * Logs the provided API response data as a JSON string.
 *
 * This function takes an object, converts it to a pretty-printed JSON string,
 * and logs it using the `logger.info` method.
 *
 * @param {object} apiResponseData - The API response data to be logged.
 * @returns {object} The result of the logger.info method call.
 */
export const logInfoJsonStringify = (apiResponseData: object): object => {
  return logger.info(
    `--- Devices: ${JSON.stringify(apiResponseData, null, 2)}`,
  );
};
