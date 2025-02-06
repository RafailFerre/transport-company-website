// Получаем элементы
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

// Открываем окно чата при нажатии на кнопку
chatButton.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
});

// Закрываем окно чата при нажатии на кнопку закрытия
closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Отправляем сообщение через EmailJS
sendMessageButton.addEventListener('click', () => {
    if (
        chatName.value.trim() !== '' &&
        chatEmail.value.trim() !== '' &&
        chatPhone.value.trim() !== '' &&
        chatMessage.value.trim() !== ''
    ) {
        // Параметры для отправки
        const templateParams = {
            name: chatName.value,
            email: chatEmail.value,
            phone: chatPhone.value,
            message: chatMessage.value,
        };

        // Отправка письма
        emailjs
            .send('service_ml33qof', 'template_7e5z5kl', templateParams) // Замените на ваши ID
            .then(() => {
                // Уведомление об успешной отправке
                notificationMessage.textContent = 'Ваше сообщение отправлено!';
                notification.style.background = '#28a745';
                notification.classList.add('show');

                // Очищаем поля
                chatName.value = '';
                chatEmail.value = '';
                chatPhone.value = '';
                chatMessage.value = '';

                // Скрываем уведомление через 3 секунды
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            })
            .catch(() => {
                // Уведомление об ошибке
                notificationMessage.textContent = 'Ошибка при отправке сообщения. Попробуйте снова.';
                notification.style.background = '#dc3545';
                notification.classList.add('show');

                // Скрываем уведомление через 3 секунды
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            });
    } else {
        // Уведомление, если не все поля заполнены
        notificationMessage.textContent = 'Пожалуйста, заполните все поля.';
        notification.style.background = '#dc3545';
        notification.classList.add('show');

        // Скрываем уведомление через 3 секунды
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});


// // Get elements
// const chatButton = document.getElementById('chat-button');
// const chatWindow = document.getElementById('chat-window');
// const closeChat = document.getElementById('close-chat');
// const sendMessageButton = document.getElementById('send-message');
// const chatMessage = document.getElementById('chat-message');
// const notification = document.getElementById('notification');
// const notificationMessage = document.getElementById('notification-message');

// // Open chat window when user clicks on the chat button
// chatButton.addEventListener('click', () => {
//     chatWindow.style.display = 'flex';
// });

// // Close chat window when user clicks on the close icon
// closeChat.addEventListener('click', () => {
//     chatWindow.style.display = 'none';
// });

// // Send message to chat window and close it
// sendMessageButton.addEventListener('click', () => {
//     if (chatMessage.value.trim() !== '') {
//         // Show notification
//         notificationMessage.textContent = 'Your message has been sent: ' + chatMessage.value;
//         notification.classList.add('show');

//         // Clear chat message
//         chatMessage.value = '';

//         // Hide notification after 3 seconds
//         setTimeout(() => {
//             notification.classList.remove('show');
//         }, 3000);
//     } else {
//         // Show error notification
//         notificationMessage.textContent = 'Please enter a message!';
//         notification.style.background = '#ff0202'; /* Red color for error */
//         notification.classList.add('show');

//         // Hide notification after 3 seconds
//         setTimeout(() => {
//             notification.classList.remove('show');
//             notification.style.background = '#8404a8'; /* Restore default color */
//         }, 3000);
//     }
// });

