const addContext = require("mochawesome/addContext");
describe("templatespec", () => {
  Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
      const screenshot = `screenshots/${Cypress.spec.name}/${runnable.parent.title}--${test.title}(failed II).png`;
      addContext({ test }, "/cypress-tests/cypress/" + screenshot);
    }
  });
});
