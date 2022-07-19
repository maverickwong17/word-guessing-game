const letterNumber = /^[0-9a-zA-Z]+$/;

class Letter {
    constructor(input){
        this.char = input
        this.visible = check(input)
    }

    toString(){
        if(this.visible === false){
            return "_"
        }
        return this.char
    }

    guess(choice){
        if(choice !== this.char){
            return false
        }return true
    }

    getSolution(){
        return this.char
    }
}

function check(input) {
    if(input.match(letterNumber)){
        return false
    }
    return true
}

module.exports = Letter;