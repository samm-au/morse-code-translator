# Morse Code Translator

![Screen Shot 2022-05-13 at 12 39 43 pm](https://user-images.githubusercontent.com/97388878/168226443-10135fc8-2d18-48d8-9514-1b5c24ff2ba0.png)


## Link to Live website

[Link](https://samm-au.github.io/morse-code-translator/)

## About

A morse code translator that takes inputs from users and translates from Morse code to English and vice versa.

How it works is that the user adds some text in the input fields and click the submit button. The translated input should then display in the box below.

## MVP

Create a webpage that allows users to input english and get a more code output, and input morse code and get an english output

Must support the alphabet, spaces, numbers.

Must give user feedback when they input unsupported characters.

Must be able to translate both ways.

Project must use javascript modules to seperate dom logic from vanilla js logic.

Can use react, or vanilla js.

Functions you write must be unit tested (you won't be able to write unit tests for function that interact with the dom).

## Technologies used

- HTML
- CSS
- Sass
- Javascript
- Jest

## Thought process

Design:
I wanted to keep things simple and have both English to Morse and Morse to English in two columns on the page. Colours and font were also very simple and to me that was the most user friendly.

Logic:
I needed to somehow grab the user's input and take the user's input and produce an outcome in the box below at event where the submit button was clicked.

Initially, I used one object which was the morseCode and I was able to write the logic to convert English to Morse code and wrote a function to do vice versa.

Once I was able to append the output onto the page, I added more conditions, such as if the input characters are invalid - display a message.

I organised my code and seperated the dom components into its own file and other bulky code like the morseCode objects into another. I then imported and exported relevant functions and data to make sure the functionality is all hooked up properly.

In the future, I'd focus on writing out the tests properly at the early stages of the app building.
