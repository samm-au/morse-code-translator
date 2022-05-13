// should return correct output
// undefined
// spaces
// string

import { convertToEnglish, convertToMorse } from "./script";

describe("Testing app functions", () => {
  it("should give the correct translation from Morse code to English", () => {
    expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("Hello");
  });

  it("should give the correct translation from Enlish to Morse code", () => {
    expect(convertToMorse("hello there")).toBe(
      ".... . .-.. .-.. ---/- .... . .-. ."
    );
  });

  it("should convert to Morse Code regarless of case", () => {
    expect(convertToMorse("heLLo there")).toBe(
      ".... . .-.. .-.. ---/- .... . .-. ."
    );
  });

  it("first letter of first word converted from Morse code should be capitalised", () => {
    expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("Hello");
  });
});
