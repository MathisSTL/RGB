function validateAnswer() {
    var userInput = document.getElementById("userInput").value;
    var message = document.getElementById("message");
    
    if (userInput.trim().toLowerCase() === "255137249") {
        message.textContent = "4";
        message.style.color = "green";
    } else {
        message.textContent = "Essayez encore";
        message.style.color = "red";
    }
}
