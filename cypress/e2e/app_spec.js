const addContext = require("mochawesome/addContext");
describe.skip("templatespec", () => {
  Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
      const screenshot = `screenshots/${Cypress.spec.name}/${runnable.parent.title}--${test.title}(failed).png`;
      addContext({ test }, "/cypress-tests/cypress/" + screenshot);

      const videos = `videos/${Cypress.spec.name}/${runnable.parent.title}--${test.title}(failed).mp4`;
      addContext({ test }, "/cypress-tests/cypress/" + videos);
    }
  });
});
