var unread = 0;

var paragraphOptions = [
    
];

var messageOptions = [
    {
        name: "Josh Willard",
        email: "willardthewizard@hotmail.org",
        imageSrc: "https://as2.ftcdn.net/v2/jpg/00/26/28/11/1000_F_26281188_qQ0GpGSeH1jKfPiBv6SLyfMqRwjRvo6c.jpg",
        messages: [
            "Hey, dude. You should actually shoot yourself. No, im serious. I wrote you this email to tell you you should end your life. I hate you. You have never been nice to me and I hope you die. KYS KYS KYS",
            "Just another reminder that you should kill urself. Bye bitch.",
            "Hey, it's me. Josh from highschool. I hate you so much. Why are you still alive, please end your life <b>i hate you.</b>",
            "kys bitch."
        ]
    },
    {
        name: "dog",
        email: "iamarealdog@doghouse.gov",
        imageSrc: "https://cdn.discordapp.com/attachments/867286316064702486/1046200968527745075/RDT_20221126_1305287295035870647228466.jpg",
        messages: [
            "where is your hoise",
            "i see you fromw indow",
            "let me in",
            "im coming inside tonite",
            "prrof im real dog <img src=\"https://cdn.discordapp.com/attachments/867286316064702486/1046200968527745075/RDT_20221126_1305287295035870647228466.jpg\" />"
        ]
    },
    {
        name: "Kyle Dunn",
        email: "spacebuilder@brickhill.com",
        imageSrc: "https://cdn.discordapp.com/attachments/867286316064702486/1046639555320758312/awdawda.jpg",
        messages: [
            "bro get me out of here. <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UzvEeQCj36TE3qGdIckuf5FKmFc8xXZ1CAeKFlrR-VwpDJjGskKUo7tektyjXmQFDDk&usqp=CAU\" />",
            "get me out of this wack-ass prison",
            "i love this kid man, i looove this kid",
            "I WAS JUST HERE TO UHHHHH PICK UP A CUP CAKE!"
        ]
    },
    {
        name: "whdauiwhdbvs",
        email: "UNKNOWNADRESS",
        imageSrc: "https://cdn.discordapp.com/attachments/562484422364889128/1045576862354645083/Screenshot_20221030-145503_Snapchat.jpg",
        messages: [
            "<img src=\"https://cdn.discordapp.com/attachments/562484422364889128/1045576862354645083/Screenshot_20221030-145503_Snapchat.jpg\" />"
        ]
    },
    {
        name: "Harry Small",
        email: "smalltothewall@bd.f",
        imageSrc: "https://cdn.discordapp.com/attachments/562484422364889128/1017653997865291836/unknown.png",
        messages: [
            "Hey, waht are you ans dwahobhbx njcbkuayfyayvyuavdw",
            "im going to keep messageing you",
            "YOOOO  CHECK NEW SCP LUCAS",
            "Alex Dunn keeps messaging me :'("
        ]
    },
]

window.onload = () => {
    unread = Number(localStorage.getItem("msgCount"));
    localStorage.setItem("msgCount", "0");

    document.getElementById("unread-text").innerText = "Unread messages: " + unread;

    var msgList = document.getElementById("message-list");
    for (let i = 0; i < unread; i++)
    {
        msgList.appendChild(getMessageElement());
    }
};

function getRand(max)
{
    return Math.floor(Math.random()*max);
}

function getMessageElement()
{
    var msg = document.createElement("div");
    msg.classList = "msg";

    var sender = messageOptions[getRand(messageOptions.length)];

    var para = document.createElement("p");
    para.innerHTML = sender.messages[getRand(sender.messages.length)];
    
    var from = document.createElement("h3");
    from.innerText = "From " + sender.name + " - " + sender.email;

    var to = document.createElement("h4");
    to.innerText = "To LucasJ - lucasjamreal@fppp.gov";

    var image = document.createElement("img");
    image.classList = "pfl-pic";
    image.src = sender.imageSrc;

    msg.appendChild(image);
    msg.appendChild(from);
    msg.appendChild(to);
    msg.appendChild(para);

    return msg;
}