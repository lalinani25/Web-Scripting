let main = document.querySelector("main")
let snake = document.querySelector("#snakes")

let apple = document.createElement("img")
apple.src = "images/apple.png"
main.appendChild(apple)

let head = document.createElement("div")
head.className = "snake"
snake.appendChild(head)

function moveToRandomLocation(elm) {
    let mainWidth = +(window.getComputedStyle(main).getPropertyValue('width').match(/\d+/))
    let mainHeight = +(window.getComputedStyle(main).getPropertyValue('height').match(/\d+/))

    let elmWidth = +(window.getComputedStyle(elm).getPropertyValue('width').match(/\d+/))
    let elmHeight = +(window.getComputedStyle(elm).getPropertyValue('height').match(/\d+/))

    let numCols = Math.floor(mainWidth / elmWidth)
    let numRows = Math.floor(mainHeight / elmHeight)

    let col = Math.floor(Math.random() * numCols)
    let row = Math.floor(Math.random() * numRows)

    elm.style.left = (col * elmWidth) + "px"
    elm.style.top = (row * elmHeight) + "px"
}
moveToRandomLocation(apple)

let changeDirection = function (event) {

    let key = event.keyCode

    if (key == 37) {
        currentDirection = "left";
    }
    else if (key == 38) {
        currentDirection = "up";
    }
    else if (key == 39) {
        currentDirection = "right"
    }
    else if (key == 40) {
        currentDirection = "down"
    }

    console.log(currentDirection)
}

function moveSnake() {

    let tail = snake.firstElementChild
    let head = snake.lastElementChild

    if (tail.classList.contains('hidden')) {
        tail.classList.remove('hidden')
    }

    let snakeTop = +(window.getComputedStyle(head).getPropertyValue('top').match(/\d+/))
    let snakeLeft = +(window.getComputedStyle(head).getPropertyValue('left').match(/\d+/))

    let snakeWidth = +(window.getComputedStyle(head).getPropertyValue('width').match(/\d+/))
    let snakeHeight = +(window.getComputedStyle(head).getPropertyValue('height').match(/\d+/))

    if (currentDirection === "left") {
        snakeLeft -= snakeWidth;
    }
    else if (currentDirection === "up") {
        snakeTop -= snakeHeight;
    }
    else if (currentDirection === "right") {
        snakeLeft += snakeWidth;
    }
    else if (currentDirection === "down") {
        snakeTop += snakeHeight;
    }

    tail.style.left = snakeLeft + "px"
    tail.style.top = snakeTop + "px"

    snake.removeChild(tail)
    snake.appendChild(tail)

    if (snakeCollidesWithApple()) {
        document.dispatchEvent(collision)
    }

    if (snakeHitsBorder()) {
        document.dispatchEvent(hitsBorder)
    }

    if (snakeHitsBody()) {
        document.dispatchEvent(hitsBody)
    }
}

let currentDirection = undefined;

function snakePositionAtStart(head) {
    moveToRandomLocation(head)
    let headTop = +(window.getComputedStyle(head).getPropertyValue('top').match(/\d+/))
    let headLeft = +(window.getComputedStyle(head).getPropertyValue('left').match(/\d+/))

    if (headTop <= 250) {
        currentDirection = "down"
    }
    else if (headLeft >= 250) {
        currentDirection = "left"
    }
    else if (headTop >= 250) {
        currentDirection = "up"
    }
    else if (headLeft <= 250) {
        currentDirection = "right"
    }
}
snakePositionAtStart(head)

function snakeCollidesWithApple() {
    let head = snake.lastElementChild

    let headTop = +(window.getComputedStyle(head).getPropertyValue('top').match(/\d+/))
    let headLeft = +(window.getComputedStyle(head).getPropertyValue('left').match(/\d+/))

    let appleTop = +(window.getComputedStyle(apple).getPropertyValue('top').match(/\d+/))
    let appleLeft = +(window.getComputedStyle(apple).getPropertyValue('left').match(/\d+/))

    let headWidth = +(window.getComputedStyle(head).getPropertyValue('width').match(/\d+/))
    let headHeight = +(window.getComputedStyle(head).getPropertyValue('height').match(/\d+/))

    let dTop = Math.abs(headTop - appleTop)
    let dLeft = Math.abs(headLeft - appleLeft)

    if (dTop < headHeight && dLeft < headWidth) {
        return true
    }
    return false
}

function lengthenSnake() {
    let segment = document.createElement("div")
    segment.className = "snake hidden"

    snake.prepend(segment)
}

main.focus = true;

document.body.addEventListener("keydown", changeDirection)

let body = document.querySelector("body")
let countScore = 0;
let score = document.createElement("div")
score.id = "score";
body.appendChild(score)
score.textContent = "Score: " + countScore

let collision = new CustomEvent("collision", { detail: "snake" })

document.addEventListener("collision", (e) => {
    moveToRandomLocation(apple)
    lengthenSnake()
    countScore += 1;
    score.textContent = "Score: " + countScore;
})


let timerID = setInterval(moveSnake, 500)

function snakeHitsBorder() {
    let headTop = +(window.getComputedStyle(head).getPropertyValue('top').match(/\d+/))
    let headLeft = +(window.getComputedStyle(head).getPropertyValue('left').match(/\d+/))
    if (headTop == 450 && currentDirection == "down") {
        return true;
    }
    if (headTop == 0 && currentDirection == "up") {
        return true;
    }
    if (headLeft == 0 && currentDirection == "left") {
        return true;
    }
    if (headLeft == 450 && currentDirection == "right") {
        return true;
    }
    else {
        return false;
    }

}

let hitsBorder = new CustomEvent("hitsBorder", { detail: "Game Over" })

document.addEventListener("hitsBorder", (e) => {
    let snakePosition = snakeHitsBorder()
    if (snakePosition) {
        clearInterval(timerID)
        createGameOver()
        createGameOverButton()
    }
})

function snakeHitsBody() {
    let snake = document.querySelectorAll('.snake');
    let headTop = +(window.getComputedStyle(snake[snake.length - 1]).getPropertyValue('top').match(/\d+/))
    let headLeft = +(window.getComputedStyle(snake[snake.length - 1]).getPropertyValue('left').match(/\d+/))
    for (let i = 0; i < snake.length - 1; i++) {
        console.log(headTop + ", " + headLeft)
        let snakeTop = +(window.getComputedStyle(snake[i]).getPropertyValue('top').match(/\d+/))
        let snakeLeft = +(window.getComputedStyle(snake[i]).getPropertyValue('left').match(/\d+/))
        console.log(snakeTop + ", " + snakeLeft)
        if (headTop === snakeTop && headLeft === snakeLeft) {
            console.log(true)
            return true

        }
        return false
    }
}

let hitsBody = new CustomEvent("hitsBody", { detail: "Game Over" })

document.addEventListener("hitsBody", (e) => {
    let snakePosition = snakeHitsBody()
    if (snakePosition) {
        clearInterval(timerID)
        createGameOver()
        createGameOverButton()
    }
})

function deleteGameOver() {
    let gameOver = document.querySelector("#game-over")
    document.body.removeChild(gameOver)

}

function createGameOver() {
    let gameOver = document.createElement("div")
    gameOver.setAttribute("id", "game-over")

    let closeButton = document.createElement("button")
    closeButton.setAttribute("id", "cancel-button")
    closeButton.setAttribute("type", "button")

    gameOver.appendChild(closeButton)
    document.body.appendChild(gameOver)

    gameOver.addEventListener("click", deleteGameOver)
}

function createGameOverButton() {
    let createGameOverButton = document.createElement("button")
    createGameOverButton.setAttribute("type", "button")
    createGameOverButton.setAttribute("id", "create-button")
    createGameOverButton.innerHTML = "Open Splash Screen"
    createGameOverButton.addEventListener("click", createGameOver)

    document.body.firstElementChild.appendChild(createGameOverButton)
}
function deleteGameOver() {
    let gameOver = document.querySelector("#game-over")
    document.body.removeChild(gameOver)

}

function createGameOver() {
    let gameOver = document.createElement("div")
    gameOver.setAttribute("id", "game-over")

    let closeButton = document.createElement("button")
    closeButton.setAttribute("id", "cancel-button")
    closeButton.setAttribute("type", "button")

    gameOver.appendChild(closeButton)
    document.body.appendChild(gameOver)

    gameOver.addEventListener("click", deleteGameOver)
}

function createGameOverButton() {
    let createGameOverButton = document.createElement("button")
    createGameOverButton.setAttribute("type", "button")
    createGameOverButton.setAttribute("id", "create-button")
    createGameOverButton.addEventListener("click", createGameOver)

    document.body.firstElementChild.appendChild(createGameOverButton)
}