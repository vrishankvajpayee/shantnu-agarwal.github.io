var firebaseConfig = {
    apiKey: "AIzaSyDiQTQsDF09cFCDco8BAm6GUUG8EUpesTs",
    authDomain: "mstc-certificates.firebaseapp.com",
    databaseURL: "https://mstc-certificates.firebaseio.com",
    projectId: "mstc-certificates",
    storageBucket: "mstc-certificates.appspot.com",
    messagingSenderId: "786275531768",
    appId: "1:786275531768:web:46474baf1688bf88"
};
var storage;


$(document).ready(function () {
    firebase.initializeApp(firebaseConfig);
    storage = firebase.storage();
    console.log("Firebase Initialised.")
});

function dod() {
    document.getElementById("progress").style.visibility = 'visible';
    var storageRef = storage.ref();
    var regno = document.getElementById('regid').value;
    if (regno.length != 15) {
        console.log(regno.length);
        document.getElementById("datalink").innerHTML = "";
        document.getElementById("datalink").style.visibility = 'hidden';
        document.getElementById("errorlink").innerHTML = "Please enter your complete register number";
        document.getElementById("errorlink").style.visibility = 'visible';
        document.getElementById("progress").style.visibility = 'hidden';
        return;

    }
    var filepath = 'competitive-coding//' + regno + '.jpg';
    var pathReference = storage.ref(filepath);

    insaan()
<<<<<<< HEAD
    return;
=======
        return;
>>>>>>> parent of 145980b... Back to Normal


    storageRef.child(filepath).getDownloadURL().then(function (url) {
        document.getElementById("datalink").innerHTML = "Download Certificate";
        document.getElementById("datalink").href = url;
        document.getElementById("datalink").style.visibility = 'visible';
        document.getElementById("errorlink").style.visibility = 'hidden';
        document.getElementById("progress").style.visibility = 'hidden';
        console.log("FOUND IT BABY!");
    }).catch(function (error) {
        document.getElementById("datalink").innerHTML = "";
        document.getElementById("datalink").style.visibility = 'hidden';
        document.getElementById("errorlink").innerHTML = "There was no certificate with this register number, please try again.";
        document.getElementById("errorlink").style.visibility = 'visible';
        document.getElementById("progress").style.visibility = 'hidden';
        console.log("OOPS!");
    });



}

function insaan() {
    var recaptcha = $('#g-recaptcha-response').val();
    console.log(recaptcha);
    if (recaptcha == "") {
        console.log("Click nahi kara");
    }
<<<<<<< HEAD
    var httprequest = new XMLHttpRequest();
    httprequest.open('POST',"https://www.google.com/recaptcha/api/siteverify",false);
    httprequest.setRequestHeader("Access-Control-Allow-Origin","https://www.google.com/recaptcha/api/siteverify");
    httprequest.send("response="+ recaptcha+"&secret=6LeZMbIUAAAAANeFZLbX7NZwImWHSsQOhLBfY3XH");
    console.log(httprequest.responseText);

    // $.ajax({
    //     'url': "https://www.google.com/recaptcha/api/siteverify",
    //     data: {
    //         "response": recaptcha,
    //         "secret": "6LeZMbIUAAAAANeFZLbX7NZwImWHSsQOhLBfY3XH"
    //     },
    //     datatype : 'jsonp',
    //     crossDomain: true,
    //     success: function (data) {
    //         var res = data.success.toString();
    //         alert("User verified: " + res);
    //         if (res == 'true') {
    //             document.getElementById('g-recaptcha').innerHTML = 'THE CAPTCHA WAS SUCCESSFULLY SOLVED';
    //             console.log("HUMANS")
    //         }
    //     }, 
    //     error: function(xhr, status){
    //         console.log(xhr);
    //         console.log(status);
    //     }
    // });

=======
    $.ajax({ 'url' : "https://www.google.com/recaptcha/api/siteverify", 
               data: { 
                   "response": recaptcha,
                   "secret":"6LeZMbIUAAAAANeFZLbX7NZwImWHSsQOhLBfY3XH"
            },
			   success: function( data  ) { 			        
				var res = data.success.toString();
                        alert( "User verified: " + res);					
				if (res ==  'true') { 
                       document.getElementById('g-recaptcha').innerHTML = 'THE CAPTCHA WAS SUCCESSFULLY SOLVED'; 
                       console.log("HUMANS")
                                } 
                           } // end of success: 
         }); // end of $.ajax 
    
>>>>>>> parent of 145980b... Back to Normal
}