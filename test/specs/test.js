import { parse } from 'node-html-parser';

describe("Testing with W3Schools HTML Tables", () => {
  it("Read data from table", async () => {
    await browser.url("https://www.w3schools.com/html/html_tables.asp");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/HTML Tables/i),
      5000,
      "Title didn't match with 'HTML Tables'"
    );

    const elems = await $("#customers tbody");
    const outerHTML = await elems.getHTML();
    const docNodes = parse(outerHTML);

    const allTextNodeElements = docNodes.querySelectorAll("tr *");
    const numColsInRow = 3;
    allTextNodeElements.forEach((item, index) => {
      index % numColsInRow == 0 ? process.stdout.write("\n") : false;
      process.stdout.write(item.innerText + "\t");
    });

    await browser.getTitle();
  });
});
