import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"
// - Can type any word that begins with a vowel in the text input (e.g. apple)
// - Can hit the submit button
// - Can see the words that begin with a vowel translated to Pig Latin and rendered to the page (e.g. appleway)
// **Story 2: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have "qu" in the first syllable translated by moving all the consonant and the "u" to the end and add "ay".**

// **Branch:** qu-functionality

// **Acceptance Criteria**

// - Can type any word that has a "qu" in the first syllable in the text input (e.g. squeal)
// - Can hit the submit button
// - Can see the words that have a "qu" in the first syllable translated to Pig Latin and rendered to the page (e.g. ealsquay)

// input: string gets turned into a word array
// output: translated string into pig latin
// make a conditional statement that uses .includes to check for "qu" it take the "qu" and concat ay to the end of the word.
const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState()
  // "apple through queen squeal fry fluent"
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      // console.log("vowelsArray:", vowelsArray)
      const firstSyllable = eachWord.slice(0, 1)

      console.log(eachWord.valueOf())
      // ACTION ITEM: your Pig Latin logic goes here!

      if (eachWord[0] === vowelsArray[0]) {
        return eachWord + "way"
      }
      if (eachWord.includes("qu")) {
        const quIndex = eachWord.indexOf("qu")
        const firstSyllable = eachWord.slice(0, quIndex + 2)
        const restOfWord = eachWord.slice(quIndex + 2)
        return restOfWord + firstSyllable + "ay"
      }

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App
