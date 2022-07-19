const Letter = require("./Letter");
const words = require("./words");

class Word extends Letter {
  constructor(word){
      let letters = [{char:"h"},{char:"i"}]
      let letter = ["h","i"]
      super(letter[0])
      this.word = word
      this.letters = [{char:"h"},{char:"i"}]
    }
    
//   guessLetter()
//   guessCorrectly()
}

var classArr = []
function createArr(word){
    var arr = word.split('')
    for(let i=0 ; i < arr.length; i++){
        classArr = new Letter(arr[i])
    }
    console.log(classArr)
}

module.exports = Word;

createArr("hi")

// words.letters = [{char:"h"},{char:"i"}]

// word.letters[0] = class Letter

// Word => Letter