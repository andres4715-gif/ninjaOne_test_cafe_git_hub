import logger from "../../utils/logger";

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
  t: TestController,
  endpoint: string,
  apiResponseData: object,
): Promise<void> => {
  await t
    .expect(Array.isArray(apiResponseData))
    .ok(`The ${endpoint} response data is not an array`);
  logger.info("--- SUCCESS: Data obtained is an array");
};
