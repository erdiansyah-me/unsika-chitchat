const chat = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('#chat-btn');
const sendBtn = document.querySelector('#submit');
const inputMsg = document.querySelector('#message');
const chatArea = document.querySelector('#chat-area');

function yScroll() {
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
}

chatBtn.addEventListener('click', () => {
    chat.classList.toggle('show');
    inputMsg.focus();
    yScroll();
})

sendBtn.addEventListener('click', () => {
    sendMessage(ip);
    // yScroll();
})

inputMsg.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage(ip);
        // yScroll();
    }
})


