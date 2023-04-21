const responses = [
	{ type: "positive", text: "Absolutely, moo-solutely!" },
	{ type: "positive", text: "Yes, definitely!" },
	{ type: "positive", text: "Without a doubt!" },
	{ type: "positive", text: "You can count on it!" },
	{ type: "positive", text: "It is certain!" },
	{ type: "neutral", text: "Ask again later." },
	{ type: "neutral", text: "Cannot predict now." },
	{ type: "neutral", text: "Better not tell you now." },
	{ type: "neutral", text: "Reply hazy, try again." },
	{ type: "neutral", text: "Concentrate and ask again." },
	{ type: "negative", text: "Don't count on it." },
	{ type: "negative", text: "Outlook not so good." },
	{ type: "negative", text: "My sources say no." },
	{ type: "negative", text: "Very doubtful." },
	{ type: "negative", text: "Signs point to no." },
];

const form = document.querySelector("form");
const answerDiv = document.getElementById("answerDiv");
const answer = document.getElementById("answer");
const img = document.getElementById("magicCowBallImg");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const prompt = document.getElementById("prompt").value;
	const response = getResponse();
	answer.textContent = response.text;
	answerDiv.classList.remove("positive", "negative", "neutral");
	answerDiv.classList.add(response.type);
	answerDiv.classList.add("show");
	document.getElementById("moo").play();
	document.body.style.backgroundColor = answerDiv.classList.contains("positive")
		? "#28a745"
		: answerDiv.classList.contains("negative")
		? "#dc3545"
		: "#ffc107";
});

function getResponse() {
	const randomIndex = Math.floor(Math.random() * responses.length);
	return responses[randomIndex];
}
