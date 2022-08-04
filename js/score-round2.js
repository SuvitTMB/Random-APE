
$(document).ready(function() {
  Connect_DB();
  ShowMap();
});



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
  var i =1;
  var str = "";
  var xRound = 1;
  str += '<table class="table" style="margin-top:15px;"><tbody>';
  db.orderBy('Round1','asc')
  //.orderBy('NameZone','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(xRound!=doc.data().Round1) {
        str += "<tr><td><br><br><br></div><td></div></tr>"
        xRound = doc.data().Round1;
      }
      str += '<tr>';
      str += '<td><div class="table-groupline">'+ doc.data().NameZone+' ('+ doc.data().RH +')</div></td>';
      str += '<td><input name="'+i+'" id="'+i+'" onchange="CheckEid('+i+',\''+ doc.id +'\')" value="'+ doc.data().Group2 +'"></td>';
      str += '</tr>';
      i++;
    });
    str += '</tbody></div>';
    $("#DisplayGroup2").html(str);
    });
}


function CheckEid(x,id) {
  var GetValue = document.getElementById(x).value;
  console.log(x,id,GetValue);
  db.doc(id).update({
    //Group2 : parseFloat(GetValue)
    Group2 : GetValue.toUpperCase()
  });
}

/*
  db.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      Eid = doc.id;
    });
  });
*/



/*
function SelectMeunu() {
  //xClickMenu = document.getElementById("ClickMenu").value;
  console.log(xClickMenu);
  loadData();
}



var DoneSurvey = 0;
var EidScore1 = "";
var EidScore2 = "";
var EidScore3 = "";
var EidScore4 = "";
var EidScore5 = "";
var EidScore6 = "";
var EidScore7 = "";
var EidScore8 = "";


function loadData() {
  dbRSOCScore.get().then((snapshot)=> {
    snapshot.forEach(doc=> {


      if(doc.data().EmpTeam=="RSOC-1") { 
        EidScore1 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-2") { 
        EidScore2 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-3") { 
        EidScore3 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-4") { 
        EidScore4 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-5") { 
        EidScore5 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-6") { 
        EidScore6 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-7") { 
        EidScore7 = doc.id;
      } else if(doc.data().EmpTeam=="RSOC-8") { 
        EidScore8 = doc.id;
      }


      if(xClickMenu=="Game1") {
        if(doc.data().EmpTeam=="RSOC-1") {
          EidScore = doc.id;
          document.getElementById('t1_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-2") { 
          EidScore = doc.id;
          document.getElementById('t2_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-3") { 
          EidScore = doc.id;
          document.getElementById('t3_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-4") { 
          EidScore = doc.id;
          document.getElementById('t4_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-5") { 
          EidScore = doc.id;
          document.getElementById('t5_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-6") { 
          EidScore = doc.id;
          document.getElementById('t6_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-7") { 
          EidScore = doc.id;
          document.getElementById('t7_pocet').value = doc.data().Game1;
        } else if(doc.data().EmpTeam=="RSOC-8") { 
          EidScore = doc.id;
          document.getElementById('t8_pocet').value = doc.data().Game1;
        }
        console.log(doc.data().EmpTeam+"==="+EidScore);
      } else if(xClickMenu=="Game2") {
        if(doc.data().EmpTeam=="RSOC-1") {
          document.getElementById('t1_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-2") { 
          document.getElementById('t2_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-3") { 
          document.getElementById('t3_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-4") { 
          document.getElementById('t4_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-5") { 
          document.getElementById('t5_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-6") { 
          document.getElementById('t6_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-7") { 
          document.getElementById('t7_pocet').value = doc.data().Game2;
        } else if(doc.data().EmpTeam=="RSOC-8") { 
          document.getElementById('t8_pocet').value = doc.data().Game2;
        }
      } else if(xClickMenu=="Game3") {
        if(doc.data().EmpTeam=="RSOC-1") {
          document.getElementById('t1_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-2") { 
          document.getElementById('t2_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-3") { 
          document.getElementById('t3_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-4") { 
          document.getElementById('t4_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-5") { 
          document.getElementById('t5_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-6") { 
          document.getElementById('t6_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-7") { 
          document.getElementById('t7_pocet').value = doc.data().Game3;
        } else if(doc.data().EmpTeam=="RSOC-8") { 
          document.getElementById('t8_pocet').value = doc.data().Game3;
        }
      } else if(xClickMenu=="Game4") {
        if(doc.data().EmpTeam=="RSOC-1") {
          document.getElementById('t1_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-2") { 
          document.getElementById('t2_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-3") { 
          document.getElementById('t3_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-4") { 
          document.getElementById('t4_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-5") { 
          document.getElementById('t5_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-6") { 
          document.getElementById('t6_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-7") { 
          document.getElementById('t7_pocet').value = doc.data().Game4;
        } else if(doc.data().EmpTeam=="RSOC-8") { 
          document.getElementById('t8_pocet').value = doc.data().Game4;
        }
      } else if(xClickMenu=="Game5") {
        if(doc.data().EmpTeam=="RSOC-1") {
          document.getElementById('t1_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-2") { 
          document.getElementById('t2_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-3") { 
          document.getElementById('t3_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-4") { 
          document.getElementById('t4_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-5") { 
          document.getElementById('t5_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-6") { 
          document.getElementById('t6_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-7") { 
          document.getElementById('t7_pocet').value = doc.data().Game5;
        } else if(doc.data().EmpTeam=="RSOC-8") { 
          document.getElementById('t8_pocet').value = doc.data().Game5;
        }
      }
    });


  });
}


var EidSave = "";
var Evalues = 0;
function CheckEid(x,eid,game) {
  if(eid=="RSOC-1") { 
    EidSave = EidScore1;
    Evalues = document.getElementById("t1_pocet").value;
  } else if(eid=="RSOC-2") { 
    EidSave = EidScore2;
    Evalues = document.getElementById("t2_pocet").value;
  } else if(eid=="RSOC-3") { 
    EidSave = EidScore3;
    Evalues = document.getElementById("t3_pocet").value;
  } else if(eid=="RSOC-4") { 
    EidSave = EidScore4;
    Evalues = document.getElementById("t4_pocet").value;
  } else if(eid=="RSOC-5") { 
    EidSave = EidScore5;
    Evalues = document.getElementById("t5_pocet").value;
  } else if(eid=="RSOC-6") { 
    EidSave = EidScore6;
    Evalues = document.getElementById("t6_pocet").value;
  } else if(eid=="RSOC-7") { 
    EidSave = EidScore7;
    Evalues = document.getElementById("t7_pocet").value;
  } else if(eid=="RSOC-8") { 
    EidSave = EidScore8;
    Evalues = document.getElementById("t8_pocet").value;
  }


  if(xClickMenu=="Game1") { 
    dbRSOCScore.doc(EidSave).update({
      Game1 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game2") { 
    dbRSOCScore.doc(EidSave).update({
      Game2 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game3") { 
    dbRSOCScore.doc(EidSave).update({
      Game3 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game4") { 
    dbRSOCScore.doc(EidSave).update({
      Game4 : parseFloat(Evalues)
    });
  }
  if(xClickMenu=="Game5") { 
    dbRSOCScore.doc(EidSave).update({
      Game5 : parseFloat(Evalues)
    });
  }

  CalAllPoint();
//console.log(x+"==="+EidSave+"==="+Evalues);
}


function CalAllPoint() {
  var sEid = "";
  var sCalAll = 0;
  dbRSOCScore.get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sEid = doc.id;
      sCalAll = doc.data().Game1 + doc.data().Game2 + doc.data().Game3 + doc.data().Game4 + doc.data().Game5;
      console.log(doc.data().EmpTeam+"==="+sEid+"==="+sCalAll);
      SaveNewScore(sEid,sCalAll);
      sEid = "";
      sCalAll = 0;
    });
  });
}


function SaveNewScore(eid,score) {
  console.log(eid+"==="+score);
  dbRSOCScore.doc(eid).update({
    SumAll : parseFloat(score)
  });
}



/*
calculate = function(object, action) {
  if (action === 'plus') {
    total += object.hodnota;
    if(object.pocet>=0 && object.pocet<=19) {
      sum_score = sum_score-object.pocet;
      object.pocet++;
      sum_score = sum_score+object.pocet;
      $("#DisplayRatio").html(sum_score);  
    }
  } else if ((action === 'minus') && (object.pocet > 0)) {
    total -= object.hodnota;
    if(object.hodnota>=0 && object.hodnota<=19) {
      sum_score = sum_score-object.pocet;
      object.pocet--;
      sum_score = sum_score+object.pocet;
      $("#DisplayRatio").html(sum_score);  
    }
  }
  render();
}

render = function() {
  //total_tickets = t1.pocet + t2.pocet + t3.pocet + t4.pocet + t5.pocet + t6.pocet + t7.pocet + t8.pocet;
  total_tickets = t1.pocet + t2.pocet + t3.pocet + t4.pocet + t5.pocet;
  SumRatio = (total_tickets/SumPoint)*5;
  $("#DisplayRatio").html("<div class='btn-score'>"+SumRatio.toFixed(2)+"</div>");  

  $('#amount').html(total.toFixed(0));
  $('#t1_pocet').html(t1.pocet); $('#t2_pocet').html(t2.pocet); $('#t3_pocet').html(t3.pocet);
  $('#t4_pocet').html(t4.pocet); $('#t5_pocet').html(t5.pocet); $('#t6_pocet').html(t6.pocet);
  $('#t7_pocet').html(t7.pocet); $('#t8_pocet').html(t8.pocet); 
  //document.getElementById("tt1_pocet").value=t1.pocet;
  document.getElementById('t1_pocet').value = '18';
  document.getElementById('t2_pocet').value = '17';

  //if(t1.pocet!=0 && t2.pocet!=0 && t3.pocet!=0 && t4.pocet!=0 && t5.pocet!=0) {
  //  $('#SubmitApp').removeClass('disabledbutton');
  //} else {
  //  var element = document.getElementById("SubmitApp");
  //  element.classList.add("disabledbutton");
  //}



  $('#total_amount').html(total.toFixed(0));
  $('#t1_amount').html(t1.pocet); $('#t2_amount').html(t2.pocet); $('#t3_amount').html(t3.pocet);
  $('#t4_amount').html(t4.pocet); $('#t5_amount').html(t5.pocet); $('#t6_amount').html(t6.pocet);
  $('#t7_amount').html(t7.pocet); $('#t8_amount').html(t8.pocet); 

  if (total_tickets > 0) {
    $('#continue').prop('disabled', false);
  } else {
    $('#continue').prop('disabled', true);
  }
}




function SavePollเ11111111111111111() {
  render();
  NewDate();
  var TimeStampDate = Math.round(Date.now() / 1000);
  dbRSOCPoll.add({
    LineID : sessionStorage.getItem("LineID"),
    LineName : sessionStorage.getItem("LineName"),
    EmpPicture : sessionStorage.getItem("LinePicture"),
    EmpID : sessionStorage.getItem("EmpID_RSOC"),
    EmpName : sessionStorage.getItem("EmpName_RSOC"),
    EmpBr : sessionStorage.getItem("EmpBR_RSOC"),
    Q1 : parseFloat(t1.pocet),
    Q1_memo : document.getElementById("feedback1").value,
    Q2 : parseFloat(t2.pocet),
    Q2_memo : document.getElementById("feedback2").value,
    Q3 : parseFloat(t3.pocet),
    Q3_memo : document.getElementById("feedback3").value,
    Q4 : parseFloat(t4.pocet),
    Q4_memo : document.getElementById("feedback4").value,
    Q5 : parseFloat(t5.pocet),
    Q5_memo : document.getElementById("feedback5").value,
    Q9_memo : document.getElementById("feedback9").value,
    AdvScore : SumRatio.toFixed(2),
    TimeStamp : TimeStampDate,
    DateSurvey : dateString
  });
  //document.getElementById('id01').style.display='block';
}



function NewDate() {
  var months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  var today = new Date();
  var day = today.getDate() + "";
  var monthEN = (today.getMonth()) + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;

  xdateCheck = months[monthEN] + " " + day + ", " + year + " " + hour + ":" + minutes + ":" + seconds ;
  //var GetWatingTime = "april 25, 2022 12:30:00";
}

function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}
*/