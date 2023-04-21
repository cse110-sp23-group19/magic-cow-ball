const responses = [
	{ type: "positive", text: "You are udderly amazing!" },
	{ type: "positive", text: "Milk it for all it's worth! The answer is yes." },
	{ type: "positive", text: "Absolutely! That's mooo-sic to my ears." },
	{ type: "positive", text: "The stars are aligned for a positive outcome." },
	{ type: "positive", text: "You're pasture prime and the answer is yes." },
	{ type: "positive", text: "It's your lucky day. The answer is a resounding yes!" },
	{ type: "positive", text: "Good news is on the horizon. Yes!" },
	{ type: "positive", text: "Moo-ve forward with confidence. The answer is yes!" },
	{ type: "positive", text: "The answer is clear. Yes, absolutely!" },
	{ type: "neutral", text: "Hmm, that's a bit pasture bedtime." },
	{ type: "neutral", text: "Can't quite put my hoof on it. Ask again later." },
	{ type: "neutral", text: "It's not mooooved one way or the udder. Neutral." },
	{ type: "neutral", text: "Sorry, I'm feeling a little bit pasture prime today." },
	{ type: "neutral", text: "Concentrate and ask again. The answer is neutral." },
	{ type: "neutral", text: "I'm on the fence about this one. Neutral." },
	{ type: "neutral", text: "Indecision is like a cow tail, it hangs everyone up. Neutral." },
	{ type: "negative", text: "That's udderly ridiculous, the answer is no." },
	{ type: "negative", text: "Not in a million cow-years. The answer is no." },
	{ type: "negative", text: "Sorry, the answer is no. Don't have a cow about it." },
	{ type: "negative", text: "It's not mooooved in your favor. No." },
	{ type: "negative", text: "Don't put all your hay in one pile. The answer is no." },
	{ type: "negative", text: "You're barking up the wrong cow. The answer is no." },
	{ type: "negative", text: "The udder answer is no. Better luck next time." },
	{ type: "negative", text: "Don't milk it, the answer is no." },
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
