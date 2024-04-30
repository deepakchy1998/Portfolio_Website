document.addEventListener("DOMContentLoaded", function () {
	const wordsList = ["developer", "programmer", "designer"]; // List of words
	let currentIndex = 0;
	let wordIndex = 0;
	const delay = 100; // Delay between letters (in milliseconds)

	function animateWord() {
		let currentWord = wordsList[currentIndex];
		let wordSpan = document.getElementById("word");
		let interval = setInterval(function () {
			if (wordIndex < currentWord.length) {
				wordSpan.textContent += currentWord[wordIndex];
				wordIndex++;
			} else {
				clearInterval(interval);
				setTimeout(clearWord, 1000); // Delay before clearing the word
			}
		}, delay);
	}

	function clearWord() {
		let wordSpan = document.getElementById("word");
		let interval = setInterval(function () {
			if (wordSpan.textContent.length > 0) {
				wordSpan.textContent = wordSpan.textContent.slice(0, -1);
			} else {
				clearInterval(interval);
				currentIndex = (currentIndex + 1) % wordsList.length;
				wordIndex = 0;
				setTimeout(animateWord, 1000); // Delay before animating the next word
			}
		}, delay);
	}

	animateWord(); // Start the animation
});

// js code for Form...

function sub(event) {
	event.preventDefault(); // Prevent the default form submission behavior
	alert("Thank you for sending your valuable feedback!");
	window.location.reload(); // Reload the page
}
