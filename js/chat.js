// Get elements
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendMessageButton = document.getElementById('send-message');
const chatName = document.getElementById('chat-name');
const chatEmail = document.getElementById('chat-email');
const chatPhone = document.getElementById('chat-phone');
const chatMessage = document.getElementById('chat-message');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');

// Open the chat window when click on chat button
chatButton.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
});

// Close the chat window when click on chat close icon
closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Sending a message by the chat window
sendMessageButton.addEventListener('click', () => {
    if (
        chatName.value.trim() !== '' &&
        chatEmail.value.trim() !== '' &&
        chatPhone.value.trim() !== '' &&
        chatMessage.value.trim() !== ''
    ) {
        // Sending parameters
        const templateParams = {
            name: chatName.value,
            email: chatEmail.value,
            phone: chatPhone.value,
            message: chatMessage.value,
        };

        // Sending message as mail by email EmailJS
        emailjs
            .send('service_ml33qof', 'template_7e5z5kl', templateParams) // Use your template and service IDs 
            .then(() => {
                // Notification about successful sending
                notificationMessage.textContent = 'Your message was sent successfully!';
                notification.style.background = '#28a745';
                notification.classList.add('show');

                // Clear fields after sending message
                chatName.value = '';
                chatEmail.value = '';
                chatPhone.value = '';
                chatMessage.value = '';

                // Hide notification after sending message in 3 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            })
            .catch(() => {
                // Notification about error
                notificationMessage.textContent = 'Error sending message. Try again.';
                notification.style.background = '#dc3545';
                notification.classList.add('show');

                // Hide notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            });
    } else {
        // Notification if not all fields are filled
        notificationMessage.textContent = 'Please fill in all fields';
        notification.style.background = '#dc3545';
        notification.classList.add('show');

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});

