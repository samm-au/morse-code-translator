import { morseCode, morseCodeEnglish } from "./morseCode.js";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const convertToMorse = (str) => {
  return str
    .split(" ")
    .map((word) =>
      word
        .toUpperCase()
        .split("")
        .map((letter) => {
          return morseCode[letter]
            ? morseCode[letter]
            : "Your input contains invalid characters!";
        })
        .join(" ")
    )
    .join("/");
};

export const convertToEnglish = (morseCode) => {
  return capitalizeFirstLetter(
    morseCode
      .split("/")
      .map((morseCodeWord) =>
        morseCodeWord
          .split(" ")
          .map((morseCodeLetter) =>
            morseCodeEnglish[morseCodeLetter]
              ? morseCodeEnglish[morseCodeLetter]
              : "Please type in morse code"
          )
          .join("")
      )
      .join(" ")
  );
};
