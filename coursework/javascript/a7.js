let mainElement = document.querySelector("main")

let box1 = document.createElement("div")
mainElement.appendChild(box1)
box1.className = "box1";
box1.textContent = "This is a box."

let box2 = document.createElement("div")
mainElement.appendChild(box2)
box2.className = "box2";
box2.textContent="This is another box.";

let box3 = document.createElement("div")
mainElement.appendChild(box3)
box3.className = "box3";
box3.textContent = "Yep, you guessed right. This is a box too."

let sectionElement = document.querySelector("section")

let appendButton = document.createElement("button")
sectionElement.appendChild(appendButton)
appendButton.id ="appendBoxBtn"
appendButton.className = "btn btn-primary"
appendButton.type = "button"
appendButton.textContent = "Append Box"

let removeButton = document.createElement("button")
sectionElement.appendChild(removeButton)
removeButton.id ="removeBoxBtn"
removeButton.className = "btn btn-primary"
removeButton.type = "button"
removeButton.textContent="Remove Box"

let modifyButton = document.createElement("button")
sectionElement.appendChild(modifyButton)
modifyButton.id ="modifyBoxBtn"
modifyButton.className = "btn btn-primary"
modifyButton.type = "button"
modifyButton.textContent = "Modify Box"

let mysteryButton = document.createElement("button")
sectionElement.appendChild(mysteryButton)
mysteryButton.id ="mysteryBoxBtn"
mysteryButton.className = "btn btn-primary"
mysteryButton.type = "button"
mysteryButton.textContent = "Mystery"



function appendBoxHandler() {
    let mainElement = document.querySelector("main")

    let box4 = document.createElement("div")
    mainElement.appendChild(box4)
    box4.className = "box4"
    box4.textContent = "This is a new appended box."
}

let appendBoxBtn = document.querySelector("#appendBoxBtn")
console.log(appendBoxBtn)
appendBoxBtn.addEventListener("click", appendBoxHandler)


function removeBoxBtnHandler() {
    let mainElement = document.querySelector("main")
    console.log(mainElement.firstChild.nodeName)
    mainElement.removeChild(mainElement.firstElementChild)
    
}

let removeBoxBtn = document.querySelector("#removeBoxBtn")
removeBoxBtn.addEventListener("click", removeBoxBtnHandler)


function modifyBoxHandler() {
    let mainElement = document.querySelector("main")
    let firstElement = mainElement.firstElementChild
 
    if(firstElement.getAttribute("class") == "box1" || 
        firstElement.getAttribute("class") == "box2" || 
        firstElement.getAttribute("class") == "box3"){
            console.log(firstElement.className)
            firstElement.className = "box4"
    }
    else{
        firstElement.className = "box1"
    }  
}

let modifyBoxBtn = document.querySelector("#modifyBoxBtn")
modifyBoxBtn.addEventListener("click", modifyBoxHandler)


function mysteryBoxHandler(){
    let mainElement = document.querySelector("main")
    let box5 = document.createElement("div")
    mainElement.appendChild(box5)
    box5.className = "box5"
}

let mysteryBoxBtn = document.querySelector("#mysteryBoxBtn")
mysteryBoxBtn.addEventListener("click", mysteryBoxHandler)