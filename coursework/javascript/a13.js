async function RockPaperScissor() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '49f43fcda7mshec39ca2a83a8675p18cf60jsndfe8aafdb39d',
            'X-RapidAPI-Host': 'rock-paper-scissor2.p.rapidapi.com'
        }
    };

    let response = await fetch('https://rock-paper-scissor2.p.rapidapi.com/api/rock', options)

    if (response.status == 200) {
        let result = await response.json();
        console.log(result)
        let main = document.querySelector("main")
        main.innerHTML = "You: " + result.you + "<br> Computer: " + result.computer 
        + "<br> Your status: " + result.pstat + "<br> Computer's status: " + result.cstat 

    }
    else {
        console.log(response.error)
    }
}

RockPaperScissor()