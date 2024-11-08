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
    // Placeholder for the AI API URL and your API key
    const apiUrl = 'https://chat.yuxin-ai.com/?model=gpt-4o-mini'; // Replace with your AI API endpoint
    const apiKey = 'strict-origin-when-cross-origin'; // Replace with your API key

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt: userMessage, max_tokens: 50 })
    });

    if (!response.ok) {
        appendMessage("Error: Unable to get response from AI", 'ai');
        return;
    }

    const data = await response.json();
    const aiMessage = data.choices[0].text.trim(); // Adjust based on your API response structure
    appendMessage(aiMessage, 'ai');
}

