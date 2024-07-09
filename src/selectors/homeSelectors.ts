import { Selector } from "testcafe";

export const homeSelectors = {
  device_info: Selector(".device-info"),
  device_option: Selector("[class='device-options']"),
  homePageDeviceNameSelector: Selector(".device-name"),
  homePageEditDeviceButton: '[class="device-edit"]',
  homePageRemoveDeviceButton: '[class="device-remove"]',
  homePageDeviceName: ".device-name",
  homePageDeviceType: ".device-type",
  homePageDeviceCapacity: ".device-capacity",
};

export default homeSelectors;
