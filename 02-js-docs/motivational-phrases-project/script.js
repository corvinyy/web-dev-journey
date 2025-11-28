const phrases = [
    "Believe in yourself and all that you are.",
    "The only way to do great work is to love what you do.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn't just find you. You have to go out and get it.",];

function generatePhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.querySelector("h2").innerHTML = phrases[randomIndex];
}
