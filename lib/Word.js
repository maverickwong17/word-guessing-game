const Letter = require("./Letter");
const words = require("./words");

class Word {
  constructor(word){
      this.word = word
      this.letters = letters
    } 
  guessLetter(choice){
    if (this.word.includes(choice)){
        return true
    }return false
  }
  guessCorrectly(){
    
  }
}

var letters = []
function createArr(word){
    var arr = word.split('')
    for(let i=0 ; i < arr.length; i++){
        let temp = new Letter(arr[i])
        letters.push(temp)
    }
    console.log(letters)
}

module.exports = Word;

createArr("hi")