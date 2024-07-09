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
  return newRandomString.toLocaleUpperCase();
};

/**
 * Logs the provided API response data as a JSON string with the endpoint.
 *
 * This function takes an endpoint and an object, converts the object to a pretty-printed JSON string,
 * and logs it using the `logger.info` method, prefixed with the endpoint.
 *
 * @param {string} endpoint - The endpoint associated with the API response.
 * @param {object} apiResponseData - The API response data to be logged.
 * @returns {object} The result of the logger.info method call.
 */
export const logInfoJsonStringify = (
  comeFrom: string,
  apiResponseData: object,
  endpoint?: string,
): object => {
  return logger.info(
    `--- Refined Obtained data from ${comeFrom} ${endpoint}: ${JSON.stringify(apiResponseData, null, 2)}`,
  );
};
