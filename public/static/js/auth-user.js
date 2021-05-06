// autentikasi user anonymous
var userId = "";
var msgRef = "";
auth.signInAnonymously();
auth.onAuthStateChanged(id => {
    if(id) {
        userId = id.uid;
        msgRef = db.ref("messages/"+userId);
        msgRef.on('value', showData);
        console.log("User telah di autentikasi : "+ userId);
        console.log("Data pesan akan ditampilkan");
    }
})

// get client public IP
var ip = "";
$(document).ready(function () {
    $.getJSON('https://api.ipify.org?format=json', function (data) {
    ip = data.ip;
    console.log("IP client telah didapatkan : " + ip);
});
})

// signOut dan hapus data user anonymous
function refreshUser() {
    auth.signOut();
}
window.onbeforeunload = refreshUser();