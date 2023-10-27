import "./Hangman.css"
import React, { useState, useEffect } from "react";
import Figure from "../components/Figure.js"
import WrongLetters from "../components/WrongLetters.js"
import DisplayWord from "../components/DisplayWord.js"

const words = [ "disaster","hierarchy","establish","bucket","stake","bother","bitter","amputate" ]
let selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } 
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } 
            }
          }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
      }, [correctLetters, wrongLetters, playable]);

    return (
    <>
    <h1>Hangman</h1>
    <div className="game-container">
    <Figure wrongLetters={wrongLetters}/>
    <WrongLetters wrongLetters={wrongLetters}/>
    <DisplayWord selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
    </>
    );
};

export default Hangman;
