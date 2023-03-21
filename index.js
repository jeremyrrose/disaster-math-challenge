// return an object representing the results of arithmetic operations
// given inputs "number1" and "number2"
const doArithmetic = (number1, number2) => {
    // alter the code in this function
    return {
        add: number1 + number2,
        subtract: number1 - number2,
        multiply: number1 * number2,
        divide: number1 / number2
    }
}

// Want to console.log something here... or anywhere? You can!
// to test another set of numbers, try "console.log(doArithmetic(213,440)"

/////////////
/////////////
// TEST INFO below, do not edit plz
/////////////
/////////////

const expectedResult = {
    add: 13, 
    subtract: 0, 
    multiply: 28, 
    divide: 3
}

const normalUniverseResult = {
    add: 7, 
    subtract: -1, 
    multiply: 12, 
    divide: 0.75
}

const test = () => {
    const result = doArithmetic(3,4)
    console.log("\nYOUR RESULT:", result,"")
    console.log("\nEXPECTED RESULT:", expectedResult,"\n")
    const correctObj = Object.keys(result).reduce((acc,cur) => {
        return { ...acc, [cur]: result[cur] === expectedResult[cur] }
    },{})
    Object.keys(correctObj).forEach(key => console.log(`${key}: ${correctObj[key] ? "\x1b[32mYES\x1b[0m" : "\x1b[31mNOPE\x1b[0m"}`))
    if (Object.values(correctObj).every(v => v)) {
        console.log("\nYOU CAN NAVIGATE THE NEW UNIVERSE!\n")
    } else {
        console.log("\nTRY AGAIN!\n")
    }
}

test()
