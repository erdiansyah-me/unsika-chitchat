$(document).ready(() => {
    // get client public IP
    $.getJSON('https://api.ipify.org?format=json', data => {
        var ip = data.ip;
        console.log(`IP client telah didapatkan : ${{ip}}`);
    });

    // autentikasi user anonymous
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var userId = user.uid;
            console.log(`User telah di autentikasi : ${{userId}}`);
        }
    })

    // signOut dan hapus data user anonymous
    function refreshUser() {
        auth.signOut();
    }
    window.onbeforeunload = refreshUser();
})

// var userId = "";
// var msgRef = "";
// auth.signInAnonymously();
// auth.onAuthStateChanged(id => {
//     if(id) {
//         userId = id.uid;
//         msgRef = db.ref("messages/"+userId);
//         msgRef.on('value', showData);
//         console.log("User telah di autentikasi : "+ userId);
//         console.log("Data pesan akan ditampilkan");
//     }
// })

// get client public IP
// var ip = "";
// $(document).ready(() => {
// })

