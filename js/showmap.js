//var timeLeft = 30;

$(document).ready(function () {
  Connect_DB();
  document.getElementById('mp3close').style.display='block';
  document.getElementById('mp3open').style.display='none';
  ShowMap();
  setInterval("my_function();",3000); 
});


function my_function(){
    ShowMap();
}


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore().collection("BBD_Zone");
}

/*
function ShowGroup() {
  var str1 = "";
  var str2 = "";
  var str3 = "";
  var str4 = "";
  var str5 = "";
  var str6 = "";
  db.orderBy('RH','asc')
  .orderBy('Group1','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(doc.data().RH=="RH1") {
        str1 += '<div class="table-groupline1">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().RH=="RH2") {
        str2 += '<div class="table-groupline2">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().RH=="RH3") {
        str3 += '<div class="table-groupline3">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().RH=="RH4") {
        str4 += '<div class="table-groupline4">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().RH=="RH5") {
        str5 += '<div class="table-groupline5">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().RH=="RH6") {
        str6 += '<div class="table-groupline6">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      }
      //console.log(doc.data().NameZone,doc.data().RH);
    });
    $("#DisplayGroup1").html(str1);
    $("#DisplayGroup2").html(str2);
    $("#DisplayGroup3").html(str3);
    $("#DisplayGroup4").html(str4);
    $("#DisplayGroup5").html(str5);
    $("#DisplayGroup6").html(str6);
  });
}
*/

function ShowMap() {
  var str1 = "";
  var str2 = "";
  var str3 = "";
  var str4 = "";
  var str5 = "";
  var str6 = "";
  db.where('Group1','!=',0)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(doc.data().Group1==1) {
        str1 += '<div class="table-groupline1">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group1==2) {
        str2 += '<div class="table-groupline2">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group1==3) {
        str3 += '<div class="table-groupline3">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group1==4) {
        str4 += '<div class="table-groupline4">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group1==5) {
        str5 += '<div class="table-groupline5">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group1==6) {
        str6 += '<div class="table-groupline6">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      }
      console.log(doc.data().NameZone,doc.data().RH);
    });
    $("#DisplayGroup1").html(str1);
    $("#DisplayGroup2").html(str2);
    $("#DisplayGroup3").html(str3);
    $("#DisplayGroup4").html(str4);
    $("#DisplayGroup5").html(str5);
    $("#DisplayGroup6").html(str6);
    });
}

function ShowSound(x) {
  if(x==0) {
    document.getElementById('mp3close').style.display='none';
    document.getElementById('mp3open').style.display='block';
  } else {
    document.getElementById('mp3close').style.display='block';
    document.getElementById('mp3open').style.display='none';
  }
}


/*
var timeLeft = 10;
    var elem = document.getElementById('GroupList'); 
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        alert(timerId);
        clearTimeout(timerId);
        timeLeft = 10;
        //doSomething();
        ShowMap();
      } else {
        $("#TimeRedirect").html(timeLeft + ' seconds remaining');
        timeLeft--;
        //ShowMap();
      }
    }
*/

