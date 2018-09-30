// RPS-Multi

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxFi1k-LztcMK7eqmpBO5sOdF8UvSRCf4",
    authDomain: "rps-multi-edc26.firebaseapp.com",
    databaseURL: "https://rps-multi-edc26.firebaseio.com",
    projectId: "rps-multi-edc26",
    storageBucket: "rps-multi-edc26.appspot.com",
    messagingSenderId: "206255959955"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#startGame").on("click", function() {
    
    event.preventDefault()

    var playerName = $("#playerName").val().trim();


    // var ref = firebase.database().ref("players");
    //     ref.once("value")
    //     .then(function(snapshot) {
            // var a = snapshot.exists();  // true
            // var b = snapshot.child("name").exists(); // true
            // var c = snapshot.child("name/first").exists(); // true
            // var d = snapshot.child("name/middle").exists(); // false
        //     if (!snapshot.child("1").exists()) {
        //         database.ref('/players/1').set({
        //             name: playerName,
        //             wins: 0,
        //             losses: 0
        //         })
        //     } else if (!snapshot.child("2").exists()) {
        //         database.ref('/players/2').set({
        //             name: playerName,
        //             wins: 0,
        //             losses: 0
        //         })
        //     }
        // });


    database.ref('/players').once("value", function(snapshot) {
        // console.log(snapshot.val());
        // console.log(snapshot.child("1").exists());
        
        // var a = snapshot.child("1").exists();
        // console.log(a);
        // Remove
        // snapshot.child("1/name").child("name").remove()
        if (!snapshot.child("1").exists()) {
            database.ref('/players/1').set({
                name: playerName,
                wins: 0,
                losses: 0
            })
        } else if (!snapshot.child("2").exists()) {
            database.ref('/players/2').set({
                name: playerName,
                wins: 0,
                losses: 0
            })
        }
    });
});
    
