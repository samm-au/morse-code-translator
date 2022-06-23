import { morseCode } from "./morseCode.js";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//Getting key based on given value
const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
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

export const convertToEnglish = (morseCodeInput) => {
  return capitalizeFirstLetter(
    // Checking if the input is morse code
    morseCodeInput.includes("/") || morseCodeInput.includes(" ")
      ? morseCodeInput
          .split("/")
          .map((word) =>
            word
              .split(" ")
              .map((letter) => getKeyByValue(morseCode, letter))
              .join("")
              .toLowerCase()
          )
          .join(" ")
      : "Invalid characters"
  );
};
