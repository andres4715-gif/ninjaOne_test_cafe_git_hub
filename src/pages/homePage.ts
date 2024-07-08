// utils/ButtonChecker.ts
import { t } from "testcafe";
import logger from "../utils/logger";

class ButtonChecker {
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

export default new ButtonChecker();
