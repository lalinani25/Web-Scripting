async function RockPaperScissor() {
    const url = 'https://rock-paper-scissors14.p.rapidapi.com/?choice=rock';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5ed8458737msh087ba1486991f01p18da14jsnab209fe8d41d',
            'x-rapidapi-host': 'rock-paper-scissors14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const user = result.user;
        const comp = result.ai;
        const userChoice = user.name;
        const compChoice = comp.name;
        const finalResult = result.result;

        let main = document.querySelector("main");
        main.innerHTML = `
            <p id="game-result">You: ${userChoice}<br>Computer: ${compChoice}<br>Result: ${finalResult}</p>
            <button id="restart-btn" class="btn btn-primary" onclick="restartGame()">Restart Game</button>
        `;
    } catch (error) {
        console.error(error);
    }
}

function restartGame() {
    // Clear the previous game result and display a fresh start
    let main = document.querySelector("main");
    main.innerHTML = `
        <button id="restart-btn" class="btn btn-primary" onclick="RockPaperScissor()">Start Game</button>
    `;
}

RockPaperScissor();

