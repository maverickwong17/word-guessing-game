const letterNumber = /^[0-9a-zA-Z]+$/;

class Letter {
    constructor(input){
        this.input = input
        this.visible = check(input)
    }

    toString(){
        if(this.visible === false){
            return "_"
        }
        return this.input
    }

    guess(choice){
        if(choice !== this.input){
            return false
        }return true
    }

    getSolution(){
        return this.input
    }
}

function check(input) {
    if(input.match(letterNumber)){
        return input.visible = false
    }
    return input.visible = true
}

module.exports = Letter;