const {
  isValidDNA
} = require("../challenges/exercise006");

describe("isValidDNA", () => {
  test("se o dna e valido", () => {
    expect(isValidDNA("CA")).toBe(true);
    expect(isValidDNA("MURI")).toBe(false);
  });
});