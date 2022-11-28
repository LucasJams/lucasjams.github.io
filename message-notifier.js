function notifyOfMessage() {
    if (msgCount === 0) 
        initializeMessages();

    incrementMessage();
}

window.onload = () => {
    var m = localStorage.getItem("msgCount");
    console.log(m);

    if (m !== null && m !== "0")
    {
        msgCount = Number(m);

        initializeMessages();
        msgCountObj.innerText = msgCount;
    }

    setRandInterval();
};

var msgCount = 0;
var msgCountObj;

function setRandInterval()
{
    var i = -1;

    function b() {
        clearInterval(i);
        notifyOfMessage();
        i = setInterval(b, Math.random() * 1000 * 100);
    }

    setInterval(b, Math.random() * 1000 * 100);
}

function incrementMessage()
{
    playNotification();
    msgCountObj.innerText = ++msgCount;
    localStorage.setItem("msgCount", String(msgCount));
}

function initializeMessages() {
    addCSSFile();
    addNotifyIcon();
}

function addCSSFile() {
    var link = document.createElement("link");
    link.href = "message-notifier.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName("head")[0].appendChild(link);
}

function playNotification() {
    var aud = new Audio();
    aud.src = "512135__beezlefm__pop-up-sound.wav";
    aud.play();
}

function addNotifyIcon()
{
    var container = document.createElement("div");
    container.id = "message-notif";
    container.onclick = goToMessages;

    var icon = document.createElement("object");
    icon.id = "message-svg";
    icon.data = "https://www.svgrepo.com/show/134882/chat-messages.svg";
    icon.type = "image/svg+xml";

    var countDot = document.createElement("div");
    countDot.id = "message-count-dot";

    msgCountObj = document.createElement("h3");
    msgCountObj.id = "message-count";

    var clickBox = document.createElement("div");
    clickBox.id = "click-box";
    clickBox.onclick = goToMessages;


    countDot.appendChild(msgCountObj);
    container.appendChild(countDot);
    container.appendChild(icon);
    container.appendChild(clickBox);
    document.body.appendChild(container);
}

function goToMessages() {
    window.open("messages.html", "_self");
}
