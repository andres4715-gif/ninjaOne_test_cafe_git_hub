import { Selector } from "testcafe";

const homeSelectors = {
  device_name: Selector(".device-info"),
  device_option: Selector("[class='device-options']"),
};

export default homeSelectors;
