var age = 19

console.log(`Your age is ${age}`)

    if(age < 16) {
        console.log(`You can't vote`)
    } else if(age < 18 || age > 65) {
        console.log(`Is optional`)
    } else {
        console.log ("You can vote is mandatory")
    }