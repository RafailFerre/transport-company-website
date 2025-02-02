// Get elements
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendMessageButton = document.getElementById('send-message');
const chatMessage = document.getElementById('chat-message');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');

// Open chat window when user clicks on the chat button
chatButton.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
});

// Close chat window when user clicks on the close icon
closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Send message to chat window and close it
sendMessageButton.addEventListener('click', () => {
    if (chatMessage.value.trim() !== '') {
        // Show notification
        notificationMessage.textContent = 'Your message has been sent: ' + chatMessage.value;
        notification.classList.add('show');

        // Clear chat message
        chatMessage.value = '';

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    } else {
        // Show error notification
        notificationMessage.textContent = 'Please enter a message!';
        notification.style.background = '#ff0202'; /* Red color for error */
        notification.classList.add('show');

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            notification.style.background = '#8404a8'; /* Restore default color */
        }, 3000);
    }
});

