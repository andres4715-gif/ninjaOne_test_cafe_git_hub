import { t } from "testcafe";
import logger from "../utils/logger";

class HomePage {
  /**
   * Asynchronously checks the presence of a specified button on a device and logs the result.
   *
   * @param {boolean} buttonCheck - A boolean indicating if the button is present.
   * @param {string} buttonType - A string representing the type of button being checked (e.g., "edit", "remove").
   * @param {number} index - The index of the device being checked in the list.
   */
  async checkButtonPresence(
    buttonCheck: boolean,
    buttonType: string,
    index: number,
  ) {
    await t
      .expect(buttonCheck)
      .ok(`Device at index ${index} does not have a ${buttonType} button`);
    logger.info(
      `Device at index ${index + 1} has the ${buttonType} button displayed`,
    );
  }
}

export default new HomePage();
