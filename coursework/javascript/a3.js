const sumButton = document.querySelector("#computeSum")

const add = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let sum = value1 + value2
    sum = parseInt(value1) + parseInt(value2)
    sum = Number(value1) + Number(value2)
    sum = +value1 + +value2

    const sumInput = document.querySelector("#result")
    sumInput.value = sum

}

sumButton.addEventListener("click", add)



const subtractionButton = document.querySelector("#computeSubtraction")
const subtraction = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let subtraction = value1 - value2
    subtraction = +value1 - +value2
    subtraction = parseInt(value1) - parseInt(value2)
    subtraction = Number(value1) - Number(value2)

    const subtractionInput = document.querySelector("#result")
    subtractionInput.value = subtraction

}

subtractionButton.addEventListener("click", subtraction)



const multiplicationButton = document.querySelector("#computeMultiplication")
const multiplication = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let multiplication = value1 * value2
    multiplication = Number(value1) * Number(value2)

    const multiplicationInput = document.querySelector("#result")
    multiplicationInput.value = multiplication

}

multiplicationButton.addEventListener("click", multiplication)





const divisionButton = document.querySelector("#computeDivision")
const division = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let division = value1 / value2
    division = Number(value1) / Number(value2)

    const divisionInput = document.querySelector("#result")
    divisionInput.value = division

}

divisionButton.addEventListener("click", division)





const sqrtButton = document.querySelector("#computeSqrt")
const sqrt = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value


    let sqrt = Math.sqrt(value1)
    sqrt = Math.sqrt(Number(value1))

    const sqrtInput = document.querySelector("#result")
    sqrtInput.value = sqrt

}

sqrtButton.addEventListener("click", sqrt)






const powerButton = document.querySelector("#computePower")
const power = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let power = Math.pow(value1, value2)
    power = Math.pow(Number(value1), Number(value2))

    const powerInput = document.querySelector("#result")
    powerInput.value = power

}

powerButton.addEventListener("click", power)