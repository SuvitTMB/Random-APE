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


function ShowMap() {
  var str1 = "";
  var str2 = "";
  var str3 = "";
  var str4 = "";
  var str5 = "";
  var str6 = "";
  db.where('Group2','!=','')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(doc.data().Group2=="G") {
        str1 += '<div class="table-groupline1">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group2=="H") {
        str2 += '<div class="table-groupline2">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group2=="I") {
        str3 += '<div class="table-groupline3">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group2=="J") {
        str4 += '<div class="table-groupline4">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group2=="K") {
        str5 += '<div class="table-groupline5">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div>';
      } else if(doc.data().Group2=="L") {
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


