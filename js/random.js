var Modernizr = "";
var CheckRandom = 0;
var currentGuess = "";
var NewRandomNumber = 0;
var db = "";
var Eid = "";
var sGroup = "";
var EidQuestion = "";
var ArrQuestion = [];
var NewQuestion = "";
var EidRandom = 0;
var ok = 0;
var sCount = 0; 
var SelectNumber = 0;
var RH0 = "00000";
var RH1 = "01100";
var RH2 = "01200";
var RH3 = "01300";
var RH4 = "01400";
var RH5 = "01500";
var RH6 = "01600";
var RHClick = 0;

//$(window).on('load', function() {
$(document).ready(function () {

  //var audio = new Audio("./random.mp3");
  //audio.play();
  //javascript:playSound('RandomSound')
  //RandomSound.play();
  //$("#RandomSound").get(0).playSound('RandomSound');
  $("#TargetAPE").html("เป้าหมาย APE");
  SelectNumber = 0;
  //document.getElementById('mp3close').style.display='block';
  //document.getElementById('mp3open').style.display='none';
  //Connect_DB();
  //LoopBoxReward();
  //UpdateItem();
  OpenGroup(0);
  yeahBaby.init();
});

/*
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
  db = firebase.firestore().collection("iPhone");
}
*/


/*
function CheckClick(x) {
  if(x==1) {
    RHClick = RH1;
  } else if(x==2) { 
    RHClick = RH2;
  } else if(x==3) { 
    RHClick = RH3;
  } else if(x==4) { 
    RHClick = RH4;
  } else if(x==5) { 
    RHClick = RH5;
  } else if(x==6) { 
    RHClick = RH6;
  } else {
    RHClick = RH0;
  }
}
*/


var yeahBaby = (function() {
var inputControl = document.getElementById('js-input_control'),
    inputControlOriginalClassList = inputControl.className,
    validateButton = document.getElementById('js-validate_button'),
    clearGuessButton = document.getElementById('js-clear_guess'),
    //minPrice = parseInt(inputControl.getAttribute('min')),
    //maxPrice = parseInt(inputControl.getAttribute('max')),
    lengthRequired = 5, // Number of columns
    currentGuess,
    supportsPreserve3d = Modernizr.preserve3d,
    $odometer = $('.odometer'),
    odometerWidth = $odometer.outerWidth(),
    odometerOriginalHeight = $odometer.outerHeight(),
    odometerParentWidth = $odometer.parent().width(),
    animationDuration = 5000, // in ms
    animationDurationOriginal = animationDuration,
    animationEasing = "easeIn",
    numberHeight = 100, // height of each number
    $html = $('html');

  return {
    getTanDeg: function(deg) {
      var rad = deg * Math.PI/180;
      return Math.tan(rad);
    },

    generateRandomNumber: function(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },

    doResize: function() {
      if ($odometer.parent().width() < odometerWidth) {
        var scale = $odometer.parent().width() / odometerWidth,
          scaleUp = 1 + (1 - scale),
          marginOffset = ((odometerOriginalHeight - (odometerOriginalHeight * scale)) / 2) * scaleUp;

        $odometer.css('transform', 'scale(' + scale + ') translateY(-' + marginOffset + 'px)');
      }
      else if ($odometer.parent().width() >= odometerWidth) {
        $odometer.css('transform', 'scale(1) translateY(0)');
      }
    },

    handleResize: function() {
      yeahBaby.doResize();

      window.onresize = function() {
        yeahBaby.doResize();
      }
    },

    createOdometer: function() {
      for (i = 0; i < lengthRequired; i++) {
        $odometer.prepend('<div class="odometer__column"><div class="odometer__column_wheel"></div></div>');
      }

      if (supportsPreserve3d) {
        $('.odometer__column_wheel').each(function(index) {
          var $this = $(this),
            height = 100,
            oneRotation = 360 / 10,
            rotation = 0,
            translation = (height / 2) / yeahBaby.getTanDeg(oneRotation / 2);
          for (j = 0; j < 10; j++) {
            var rotation,
              styleString;
              if (j != 0)
                rotation = rotation + oneRotation;
                styleString = 'style="-webkit-transform: rotateX(' + rotation + 'deg) translateZ(' + translation + 'px); -ms-transform: rotateX(' + rotation + 'deg) translateZ(' + translation + 'px); transform: rotateX(' + rotation + 'deg) translateZ(' + translation + 'px);"';
                $this.append('<div class="odometer__column_number"' + styleString + '>' + j + '</div>');
          }
        });
      }
      else {
        $('.odometer__column_wheel').each(function(index) {
          var $this = $(this),
            colNumberCount = index == 0 ? 20 : ((index + 1) * 10) + 10,
            odometerColValue = 0;
          for (j = 0; j < colNumberCount; j++) {
            if (odometerColValue == 10)
              odometerColValue = 0;
            $this.append('<div class="odometer__column_number">' + odometerColValue + '</div>');
            odometerColValue ++;
          }
        });
      }
      yeahBaby.setOdometer();
    },

    setOdometer: function() {
      $html.addClass('odometer-is-animating');
      //alert(currentGuess);
/*
        EidRandom = 0;
        tCount = 0;
        ArrQuestion = [];
        //alert("Line138="+sGroup);
        db.where('EmpGroup','==',sGroup)
        .where('RandomCheck','==',0)
        .get().then((snapshot)=> {
        snapshot.forEach(doc=>{
            ArrQuestion.push([doc.data().EmpID]);
          });
          if(ArrQuestion.length==0) {
            EidRandom = 0;
            currentGuess = 0;
          } else {
            NewQuestion = random_item(ArrQuestion);
            EidRandom = NewQuestion[0];
            currentGuess = EidRandom;
          }
          currentGuess = currentGuess;
          console.log("Line154-Random New-"+sGroup+ "= "+ currentGuess);
          //alert("Random New = "+ currentGuess);
        });  
*/
      //alert("Random New = "+ currentGuess);
      if (supportsPreserve3d) {
        $('.odometer__column_wheel').each(function(index) {
          var $this = $(this),
            isLastWheel = index == $('.odometer__column_wheel').length - 1,
            extraBarrelSpins = index === 0 ? 360 * (index + 1) : 360 * (index * 2),
            newColumnValue = parseInt(currentGuess.toString().slice(index, index + 1)),
            currentRotation = $this.attr('data-rotation') ? parseInt($this.attr('data-rotation')) : 0,
            degToRotate = -Math.abs(newColumnValue * 36 + extraBarrelSpins);

          $this.attr('data-rotation', degToRotate);

          $this.velocity({
            rotateX: [degToRotate, -Math.abs(currentRotation)]
          },
          {
            duration : animationDuration,
            easing : animationEasing,
            complete : function() {
              degToRotate = -Math.abs(newColumnValue * 36)
              $this.attr('data-rotation', degToRotate);
              if (isLastWheel)
                $html.removeClass('odometer-is-animating')
            }
          });
          animationDuration = animationDuration + 500;
        });
      }
      else {
        $('.odometer__column_wheel').each(function(index) {
          var $this = $(this),
            isLastWheel = index == $('.odometer__column_wheel').length - 1,
            extraBarrelSpins = index == 0 ? numberHeight * 10 : (index + 1) * (numberHeight * 10),
            newColumnValue = parseInt(currentGuess.toString().slice(index, index + 1)),
            newTranslateValue = -Math.floor(newColumnValue * numberHeight),
            newTranslateValuePlusBarrelSpins = newTranslateValue - extraBarrelSpins,
            currentTranslation = $this.attr('data-translation') ? parseInt($this.attr('data-translation')) : 0;
          $this.velocity({
              translateY: [newTranslateValuePlusBarrelSpins, currentTranslation]
            },
            {
              duration : animationDuration,
              easing : animationEasing,
              complete: function() {
                degToRotate = -Math.abs(newColumnValue * 36)
                $this.attr('data-translation', newTranslateValue);
                if (isLastWheel)
                    $html.removeClass('odometer-is-animating')
                    if(CheckRandom!=0) {
              var varTimerInMiliseconds = 2500;
              setTimeout(function(){ 
                  //if(EidRandom!=0) {
                    //alert("sssss");
                    //LoopBoxReward();
                    //document.getElementById("id01").style.display = "block";
                  //}

/*
                alert(currentGuess+"-------");
                  if(currentGuess!="00000") {
                    document.getElementById("id01").style.display = "block";
                  }
*/
              }, varTimerInMiliseconds);
          }
                  //document.getElementById("id01").style.display = "block";
              }
            }
          );

          animationDuration = animationDuration + 250;
        });
      }
      // Reset animation duration after loop end
      animationDuration = animationDurationOriginal;
    },

    generateNewGuess: function() {
      //currentGuess = yeahBaby.generateRandomNumber(minPrice, maxPrice);
      //document.getElementById("demo").innerHTML = Math.floor(Math.random() * 99999);
      //currentGuess = Math.floor(Math.random() * 99999);
      //currentGuess = "08400";
      //alert(currentGuess+"111");

            //currentGuess = EidRandom;
            //alert("Check ok="+ok);
      //GetNewNumber();
      //currentGuess = ok;
      //alert("OK-1"+ok);
      yeahBaby.setValue();
    },

    setValue: function() {
          currentGuess = RHClick;
/*
      if(CheckRandom==1) {
        EidRandom = 0;
        ArrQuestion = [];
        //alert("Line254="+sGroup)
        db.where('EmpGroup','==',sGroup)
        .where('RandomCheck','==',0)
        .get().then((snapshot)=> {
        snapshot.forEach(doc=>{
            ArrQuestion.push([doc.data().EmpID]);
          });
          var NewQuestion1 = random_item(ArrQuestion1);
          ok = NewQuestion1[0];
          currentGuess = NewQuestion1[0];

        tCount = 0;
        tCount = ArrQuestion.length;
          console.log("line262:Count = "+ArrQuestion.length);
          $("#DisplayCount").html("<div style='font-size:15px;color:#f1f1f1;'>จำนวน "+tCount+" พนักงาน</div>");

          //$("#DisplayCount").html("<div class='boxitem'>จำนวน "+ArrQuestion.length+" ข้อมูล</div>");
          if(ArrQuestion.length==0) {
            EidRandom = 0;
            currentGuess = 0;
          } else {
            NewQuestion = random_item(ArrQuestion);
            EidRandom = NewQuestion[0];
            currentGuess = EidRandom;
          }
          currentGuess = currentGuess;
          console.log("line274==="+ArrQuestion.length+"------"+currentGuess);
          //alert("Random New = "+ currentGuess);
        });  
      } else {
        currentGuess = 0;
      }
*/
      CheckRandom = currentGuess;
      //alert("line286:SaveRSOC- "+CheckRandom+"==="+currentGuess);
      //SaveRSOC(currentGuess);
      currentGuess = currentGuess.toLocaleString('en-US', {
        minimumIntegerDigits: 5,
        useGrouping: false
      })
      inputControl.value = currentGuess;
      //alert(currentGuess+"---222");
      //alert(currentGuess);

      if (!$html.hasClass('odometer-is-animating'))
        yeahBaby.setOdometer();
    },

    validate: function() {
      var newValue = inputControl.value,
        newValueLength = newValue.length,
        tooLong = newValueLength > lengthRequired,
        shortenedPrice = newValue.slice(0, lengthRequired),
        tooShort = newValueLength < lengthRequired,
        isValid = newValue >= minPrice && newValue <= maxPrice && !tooShort && !tooLong ? true : false;
      if (isValid) {
        return true;
      }
      else if (tooLong && shortenedPrice >= minPrice  && shortenedPrice <= maxPrice) {
        inputControl.value = shortenedPrice;
        return true;
      }
      else if (tooShort) {
        return false;
      }
      else if (tooLong) {
        inputControl.value = shortenedPrice;
        return false;
      }
    },
    watchInput: function() {
      var isValid = yeahBaby.validate();
      if (isValid) {
        currentGuess = inputControl.value;
        inputControl.className = inputControlOriginalClassList + ' is-valid';
        validateButton.removeAttribute('disabled');
      }
      else if (!isValid && inputControl.value.length == lengthRequired) {
        inputControl.className = inputControlOriginalClassList + ' is-error';
        yeahBaby.disableButton();
      }
      else {
        inputControl.className = inputControlOriginalClassList + ' is-invalid';
        yeahBaby.disableButton();
      }
    },
    disableButton: function() {
      validateButton.setAttribute('disabled', 'disabled');
    },
    setupEventListeners: function() {
      validateButton.addEventListener('click', function() {
        if (!$html.hasClass('odometer-is-animating'))
          //GetNewNumber();
          //currentGuess = ok;
          //console.log("Line-345:check currentGuess-"+sGroup+" = "+currentGuess+"------"+ok);
          //RandomNewNumber();
// sadffffffffffffffffffffffffffffffff
          yeahBaby.setValue();
      });

      clearGuessButton.addEventListener('click', function(e) {
        e.preventDefault();

        inputControl.value = '';
        inputControl.className = inputControlOriginalClassList;
        inputControl.focus();
        yeahBaby.disableButton();
      });

      inputControl.addEventListener('input', function() {
        yeahBaby.watchInput();
      });

      inputControl.addEventListener('focus', function() {
        var isValid = yeahBaby.validate();

        if (inputControl.value.length == 0) {
          inputControl.className = inputControlOriginalClassList;
        }
        else if (!isValid) {
          inputControl.className = inputControlOriginalClassList + ' is-invalid';
        }
      });

      inputControl.addEventListener('blur', function() {
        var isValid = yeahBaby.validate();

        if (inputControl.value.length == 0) 
          inputControl.className = inputControlOriginalClassList;
        else if (!isValid)
          inputControl.className = inputControlOriginalClassList + ' is-error';
      });
    },

    handleNon3dAnimation: function() {
      var isIE = /*@cc_on!@*/false || !!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia;

      if (isEdge)
        supportsPreserve3d = false;

      if (!supportsPreserve3d) {
        $html[0].className += ' no-preserve-3d';
      }
    },

    init: function() {
      yeahBaby.handleNon3dAnimation();
      yeahBaby.setupEventListeners();
      yeahBaby.generateNewGuess();
      yeahBaby.createOdometer();
      yeahBaby.handleResize();
    },
  };
})();

/*
function SaveRSOC(sEmp) {
  Eid = "";
  str = "";
  //alert(sEmp);
  db.where('EmpID','==',sEmp)
  .where('RandomCheck','==',0)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      Eid = doc.id;
      sEmpName = doc.data().EmpName;
      sEmpPosition = doc.data().EmpPosition;
      sEmpDepartment = doc.data().EmpDepartment;
      str += '<div style="width:100%;"><center>';
      str += '<div class="odometer_number">'+String(sEmp).padStart(5, '00000')+'</div>'; 
      str += '<div class="txt-display">คุณ'+sEmpName+'</div>';
      str += '<div class="txt-display" style="font-size:15px;color:#ffff00;padding-top:6px;">'+sEmpPosition+'</div>';
      str += '<div class="txt-display" style="font-size:15px;color:#ffff00;padding-top:6px;">'+sEmpDepartment+'</div>';
      str += '</center></div>';
      $("#DisplayEmpID").html(str);
    });
    //var timestamp = firebase.firestore.FieldValue.serverTimestamp;
    var TimeStampDate = Math.round(Date.now() / 1000);
    if(Eid!="") {
      db.doc(Eid).update({
        GroupSelect : SelectNumber,
        TimeStampRec : parseInt(TimeStampDate),
        RandomCheck : 1
      });      
    }
  });  
}
*/

function GetNewNumber() {
  /*
  var ArrQuestion1 = [];
  //db.where('EmpGroup','==',sGroup)
  //alert("Line70="+sGroup);
  db.where('RandomCheck','==',0)
  .where('EmpGroup','==',sGroup)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=>{
      ArrQuestion1.push([doc.data().EmpID]);
    });
    var NewQuestion1 = random_item(ArrQuestion1);
    ok = NewQuestion1[0];
    currentGuess = NewQuestion1[0];
    console.log("Line-455:check currentGuess-"+sGroup+" = "+currentGuess+"------"+ok);
    //lert("ok-GetNewNumber="+ok);
  });  
*/
}


function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];   
}


function OpenGroup(x) {
  if(x!=0) {
    //yeahBaby.init();
    //yeahBaby.setValue();
    var str = "";
    str += '<div style="width:30%;height: 100%;float: right;margin-top:-180px;overflow: hidden;">';
    str += '<div><img src="./images/RH'+x+'.png" style="width:100%;"></div>';
    if(x==1) {
      str += '<div class="box-RH">พีรชัย คชะสุต</div>';
    } else if(x==2) { 
      str += '<div class="box-RH">สุรีรัตน์ สุวรรณพันธ์</div>';
    } else if(x==3) { 
      str += '<div class="box-RH">บดี ทรัพย์เจริญ</div>';
    } else if(x==4) { 
      str += '<div class="box-RH"></div>';
    } else if(x==5) { 
      str += '<div class="box-RH">เวธน์วิภพ ภาสพสิษฐ์</div>';
    } else if(x==6) { 
      str += '<div class="box-RH">ทิพย์วรรณ แซ่ปัง</div>';
    }
    str += '<div class="box-RH1">ผู้จัดการภาคธุรกิจ '+x+'</div></div>';
    //ShowRandom();       

    //str += '<div style="width:30%;height: 550px; float: right;margin-top:-200px; overflow:hidden;">';
    //str += '<img src="./images/RH4.png" style="width:100%;"><div style="font-size: 20px;text-align: center;">ผู้จัดการภาคธุรกิจ 4</div></div>';
    document.getElementById('js-validate_button').style.display='block';
    $("#TargetAPE").html("เป้าหมาย APE ของ RH-"+x);
    $("#DisplayRH").html(str);
  }
  SelectNumber = x;
  var element = document.getElementById("btnID1");
  element.classList.remove("active");
  var element = document.getElementById("btnID2");
  element.classList.remove("active");
  var element = document.getElementById("btnID3");
  element.classList.remove("active");
  var element = document.getElementById("btnID4");
  element.classList.remove("active");
  var element = document.getElementById("btnID5");
  element.classList.remove("active");
  var element = document.getElementById("btnID6");
  element.classList.remove("active");

  //alert(SelectNumber);
  if(SelectNumber==1) {
    var element = document.getElementById("btnID1");
    element.classList.add("active");
    RHClick = RH1;
  } else if(SelectNumber==2) {
    var element = document.getElementById("btnID2");
    element.classList.add("active");
    RHClick = RH2;
  } else if(SelectNumber==3) {
    var element = document.getElementById("btnID3");
    element.classList.add("active");
    RHClick = RH3;
  } else if(SelectNumber==4) {
    var element = document.getElementById("btnID4");
    element.classList.add("active");
    RHClick = RH4;
  } else if(SelectNumber==5) {
    var element = document.getElementById("btnID5");
    element.classList.add("active");
    RHClick = RH5;
  } else if(SelectNumber==6) {
    var element = document.getElementById("btnID6");
    element.classList.add("active");
    RHClick = RH6;
  } 
  $("#ButtonAPE").html("คลิกเพื่อลุ้น APE ของ RH-"+x);
  yeahBaby.setValue();
}


function ShowRandom() {
  CheckRandom = 1;
}



/*
function LoopBoxReward() {
  //alert("Line537="+sGroup);
  var str = "";
  var sData = 1;
  db.where('EmpGroup','==', sGroup)
  .where('GroupSelect','==', SelectNumber)
  //.where('RandomCheck','==', 1)
  //.limit(1)
  //.orderBy('TimeStampRec', 'desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      var parts = [];
      parts = (doc.data().EmpName).split(" ");
      var xName = parts[0];
      var xSurName = parts[1];
      str += '<div class="box-random" onclick="ViewID(\''+ doc.id +'\')" style="color:#ffff00;">'+String(doc.data().EmpID).padStart(5, '00000')+'<div style="font-size:12px;padding-top:10px;color:#fff;">'+xName+'<br>'+xSurName+'</div></div>';
    });
    $("#DisplayReward").html(str);
  });
}
*/

/*
function ViewID(x) {
  //alert(x);
  db.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      var str = "";
      var EidNew = doc.id;
      var aEmpID = doc.data().EmpID;
      var aEmpName = doc.data().EmpName;
      var aEmpPosition = doc.data().EmpPosition;
      var aEmpDepartment = doc.data().EmpDepartment;
      str += '<div style="width:100%;"><center>';
      str += '<div class="odometer_number">'+String(aEmpID).padStart(5, '00000')+'</div>'; 
      str += '<div class="txt-display">คุณ'+aEmpName+'</div>';
      str += '<div class="txt-display" style="font-size:15px;color:#ffff00;padding-top:6px;">'+aEmpPosition+'</div>';
      str += '<div class="txt-display" style="font-size:15px;color:#ffff00;padding-top:6px;">'+aEmpDepartment+'</div>';
      str += '<div class="clr" style="height: 20px;"></div>';
      str += '<div class="btn-t5" onclick="UpdateViewID(\''+ doc.id +'\')">ลบข้อมูล</div>';
      str += '<div class="btn-t2" onclick="CloseAll()">ปิดหน้าต่าง</div>';
      str += '<div class="clr" style="height: 20px;"></div>';
      str += '</center></div>';
      $("#DisplayShowEmpID").html(str);
    });
    document.getElementById("id02").style.display = "block";
  });
}


function UpdateViewID(x) {
  //alert(x);
  db.doc(x).update({
      GroupSelect : 0,
      RandomCheck : 0,
      TimeStampRec : 0
  });
  LoopBoxReward();
  //UpdateItem();
  //UpdateItem();
  document.getElementById("id02").style.display = "none";
}
*/
/*
function UpdateItem() {
    //alert("111="+sCount);
  ArrQuestion2 = [];
  sCount = 0;
  var a = 0;
  db.where('EmpGroup','==',sGroup)
    .where('RandomCheck','==',0)
    .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      ArrQuestion2.push([doc.data().EmpID]);
      a = a+1;
    });
      sCount = a
    //sCount = ArrQuestion2.length;
    //console.log("Count = "+ArrQuestion.length);
    $("#DisplayCount").html("<div style='font-size:15px;color:#f1f1f1;'>จำนวน "+sCount+" พนักงาน</div>");
    //alert("222="+sCount);
  });  
}
*/

function ShowSound(x) {
  if(x==0) {
    document.getElementById('mp3close').style.display='none';
    document.getElementById('mp3open').style.display='block';
  } else {
    document.getElementById('mp3close').style.display='block';
    document.getElementById('mp3open').style.display='none';
  }
}


function CloseAll() {
  //UpdateItem();
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
}

function play() {
  var audio = new Audio('./mp3/random.mp3');
  audio.play();
}

function playSound(animal) {
  document.getElementById(animal).play();
};