window.onscroll = function() {scrollFunction()};

var obj = { name: "John", today: new Date(), city : "New York" };
var myJSON = JSON.stringify(obj);

document.getElementById("demo").innerHTML = myJSON;

} 
