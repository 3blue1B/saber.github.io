// app.js

const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            appendMessage(userMessage, 'user');
            userInput.value = ''; // Clear the input field
            getAIResponse(userMessage); // Get the AI response
        }
    }
});

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message', sender);
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
}

async function getAIResponse(userMessage) {
    // Directly responding with the desired message
    const aiMessage = "haha wo bu hui zhe ge.";
    appendMessage(aiMessage, 'ai');
}

