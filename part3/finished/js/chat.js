// data to render
const chats = [
    {
        name: "Charlie",
        pic: "img/tony.JPG",
        lastMessage: "Your suit looks so great!",
        from: true,
        unread: false
    },
    {
        name: "Kevin",
        pic: "img/legolas.JPG",
        lastMessage: "Thanks dude!",
        from: false,
        unread: true
    },
    {
        name: "Emma",
        pic: "img/widow.jfif",
        lastMessage: "Wow that's really impresssive!",
        from: false,
        unread: true
    },
    {
        name: "Naruto",
        pic: "img/naruto.JPG",
        lastMessage: "You look great!",
        from: true,
        unread: false
    }
];

/**
 * renders all of the chats onto the page
 * @param {list of chats to render} chats 
 */
function renderChats(chats) {
    let chatArea = document.querySelector("#chat");
    chats.forEach(function (chat) {
        chatArea.appendChild(renderOneChat(chat));
    });
}

/**
 * takes in one chat object and returns it as HTML
 * @param {object that represents a chat} chatObj 
 */
function renderOneChat(chatObj) {
    // create outer li
    let li = document.createElement("li");
    li.classList.add("chat", "list-group-item");
    // create div w/ img
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.classList.add("chat-pic");
    img.src = chatObj.pic;
    img.alt = chatObj.name;
    imgDiv.appendChild(img);
    li.appendChild(imgDiv);
    // create chat content
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat-content");
    let h4 = document.createElement("h4");
    h4.innerHTML = chatObj.name + (chatObj.unread ? "<span class='unread'/>" : "");
    chatDiv.appendChild(h4);
    let chatMessage = document.createElement("div");
    chatMessage.innerHTML = (chatObj.from ? "<strong>You:</strong> " : "") + chatObj.lastMessage;
    chatDiv.appendChild(chatMessage);
    li.appendChild(chatDiv);
    return li;
}

// call the function to render chats
renderChats(chats);