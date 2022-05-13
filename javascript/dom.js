import { convertToMorse, convertToEnglish } from "./script.js";

const resultMorse = document.getElementById("result-morse");

const resultEnglish = document.getElementById("result-text");

document.querySelector("#morseToWord").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.querySelector("#inputWord").value.toUpperCase();

  //   convertToMorse(input);

  //   console.log(resultMorse);

  //   resultMorse.innerHTML = convertToMorse(input);

  //   console.log(resultMorse.value);
  document.querySelector("#result-morse").innerHTML = " ";

  const node = document.createElement("p");
  const textnode = document.createTextNode(convertToMorse(input));
  node.appendChild(textnode);
  document.getElementById("result-morse").appendChild(node);
});

document.querySelector("#wordToMorse").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.querySelector("#inputMorse").value;
  console.log(input);

  //   convertToEnglish(input);

  //   console.log(resultEnglish);
  //   if (convertToEnglish(input) === "undefined") {
  //     console.log("Please type in morsecode");
  //   } else {
  //     resultEnglish.innerHTML = convertToEnglish(input);
  //   }

  //   console.log(resultMorse.value);
  document.querySelector("#result-text").innerHTML = " ";

  const node = document.createElement("p");
  const textnode = document.createTextNode(convertToEnglish(input));
  node.appendChild(textnode);
  document.getElementById("result-text").appendChild(node);
});
