let userScore = 0;
let compScore = 0;
let user = document.querySelectorAll(".same");
let button1 = document.querySelector(".btn1");
let you = document.querySelector(".you");
let comp = document.querySelector(".comp");
let button2 = document.querySelector(".btn2");
let resultDiv = document.querySelector(".result");
let outerDiv  = document.querySelector(".outerdiv")

let array = ["rock", "paper", "scissor"];
const images = {
    rock: 'rock-image.png', // Replace with the path to your rock image
    paper: 'paper-image.png', // Replace with the path to your paper image
    scissor: 'scissor-image.png' // Replace with the path to your scissors image
};

user.forEach(element => {
    element.addEventListener("click", () => {
        
        const userChoice = element.id;
        if (userScore < 5 && compScore < 5) {
            let random = Math.floor(Math.random() * 3);
            const compChoice = array[random];

            let userImage = `<img src="${images[userChoice]}" class="result-img" alt="${userChoice}">`;
            let compImage = `<img src="${images[compChoice]}" class="result-img" alt="${compChoice}">`;

            if (userChoice === compChoice) {
                button1.innerHTML = `It's a TIE!<br> Your choice - Comp choice <br> ${userImage} ${compImage}`;
                button1.style.padding = "1vw"
                resultDiv.style.height = "25vh"
                button1.style.height = "auto"
                button1.style.width = "auto"
                outerDiv.style.height = "35vh"
                button1.style.border = "4px solid grey";
                button1.style.marginTop = "2.5vw"
                button1.style.backgroundColor = "white";
                button1.style.color = "black";

            } else if (
                (userChoice === "rock" && compChoice === "scissor") ||
                (userChoice === "scissor" && compChoice === "paper") ||
                (userChoice === "paper" && compChoice === "rock")
            ) {
                button1.innerHTML = `You WIN!<br> Your choice -  Comp choice <br> ${userImage} ${compImage}`;
                button1.style.padding = "1vw"
                resultDiv.style.height = "25vh"
                button1.style.height = "auto"
                button1.style.width = "auto"
                outerDiv.style.height = "35vh"
                button1.style.border = "4px solid green";
                button1.style.marginTop = "2.5vw"
                button1.style.backgroundColor = "white";
                button1.style.color = "black";
                userScore++;
                you.innerText = userScore;
            } else {
                button1.innerHTML = `You LOSE!<br> Your choice - Comp choice <br> ${userImage} ${compImage}`;
                button1.style.padding = "1vw"
                resultDiv.style.height = "25vh"
                button1.style.height = "auto"
                button1.style.width = "auto"
                outerDiv.style.height = "35vh"
                button1.style.border = "4px solid red";
                button1.style.marginTop = "2.5vw"
                button1.style.backgroundColor = "white";
                button1.style.color = "black";
                compScore++;
                comp.innerText = compScore;
            }
        }

        // Check for the winner
        if (userScore === 5 || compScore === 5) {
            if (userScore === 5) {
                button1.innerText = "You are the FINAL WINNER!";
                button1.style.marginTop = "0vw"
                button1.style.backgroundColor = "green"
                button1.style.color = "white"
            } else {
                button1.innerText = "Computer is the FINAL WINNER!";
                button1.style.marginTop = "0vw"
                button1.style.backgroundColor = "red"
                button1.style.color = "white"
            }
            button1.style.padding = "12px";
            button1.style.height = "auto";
            button2.style.display = "block";
        }
    });
});

button2.addEventListener("click", reset);
button2.style.display = "none";

function reset() {
    userScore = 0;
    compScore = 0;
    you.innerText = userScore;
    comp.innerText = compScore;
    button1.innerText = "Choose your move";
    // button1.style.width = "20vw"
    button1.style.backgroundColor = "black";
    button1.style.color = "white";
    button2.style.display = "none";
    button1.style.border ="none";
     // Clear previous results
}
