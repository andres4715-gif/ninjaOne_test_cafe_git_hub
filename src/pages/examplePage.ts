import { Selector } from "testcafe";

class ExamplePage {
  exampleElement: Selector;

  constructor() {
    this.exampleElement = Selector("#content");
  }
}

export default new ExamplePage();
