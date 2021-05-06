// show chat Data
function showData(items) {
    var _ul = document.getElementsByTagName('ul')[0];
    var _content = "";

    items.forEach(function(child){
        console.log(child.val().sender);
        if(child.val().sender == botName) {
            _content += "<li><div class='income-msg d-flex align-items-start my-3'><img src='static/img/bot-ava.png' alt='bot.img' class='avatar mr-2'><span class='msg bg-primary text-white px-3 py-2 mr-5'>"+ child.val().message +"</span></div></li>"
        }else{
            _content += "<li><div class='out-msg d-flex align-items-start justify-content-end my-3'><span class='msg bg-dark text-white px-3 py-2 ml-5'>"+ child.val().message +"</span></div></li>"
        }
        
    })

    _ul.innerHTML = _content;
}

// bot message
function botMessage(message, sender) {
    var botRespond = "";
    var sender = botName;
    console.log("User message: ", message);
    $.ajax({
        url: host,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "message": message,
            "sender": sender
        }),
        success: function(data, textStatus) {
            if (data != null) {
                for (i = 0; i < data.length; i++) {
                    botRespond = data[i].text;
                }

                msgRef.push().set({
                    "sender": sender,
                    "message": botRespond,
                    "time": Date.now(),
                    "type": "text"
                })
            }
            console.log("Rasa Response: ", data, "\n Status:", textStatus);
            yScroll();
        },
        error: function(errorMessage) {
            botRespond = "";
            console.log('Error' + errorMessage);
        }
    })
}

// send message
function sendMessage(ip) {
    var sender = ip;
    var message = document.getElementById("message").value;
    msgRef.push().set({
        "sender": sender,
        "message": message,
        "time": Date.now(),
        "type": "text"
    })
    document.getElementById("message").value = "";
    botMessage(message, ip);
    yScroll();

    return false;
}