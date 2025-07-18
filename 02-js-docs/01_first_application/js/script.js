var hour = new Date().getHours();
var message

if (hour < 12) {
    message = "Good morning!";
} else if (hour < 18) {
    message = "Good afternoon!";
} else {
    message = "Good evening!";
}

document.getElementById("message").innerHTML = message;