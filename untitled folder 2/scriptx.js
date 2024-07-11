
var firebaseConfig = {
  apiKey: "AIzaSyAqKmVjWBFKyqUHjrSAWl0IcEtQKRHjo3s",
  authDomain: "f2fitness-302aa.firebaseapp.com",
  projectId: "f2fitness-302aa",
  storageBucket: "f2fitness-302aa.appspot.com",
  messagingSenderId: "438574486333",
  appId: "1:438574486333:web:3e060d5186c03bd1acab54"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    document.getElementById("cuname").innerHTML = user.displayName;
    document.getElementById("cname").value = user.displayName;
    document.getElementById("cemail").value = user.email;
    localStorage.setItem("userkauid",user.uid);
    localStorage.setItem("userkanaam",user.displayName);
    localStorage.setItem("userkaemail",user.email);
  } else {
    console.log("No one is Signed in");
  }
});

function changecolor()
{
document.getElementById("sc").style.color="black";
}
function changecoloragain()
{
document.getElementById("sc").style.color="white";
}
function closefun()
{
	var x = document.getElementById("show");
  var y = document.getElementById("shows");
  var z = document.getElementById("fshow");
  var w = document.getElementById("alertrequest");
  x.style.display="none";
  y.style.display="none";
  z.style.display="none";
  w.style.display="none";
}
function closefunx()
{
  var q = document.getElementById("contactform");
  q.style.display="none";
}
function closefunxe()
{
  var x = document.getElementById("createdialog");
  x.style.display="none";
}

function openfun()
{
	var x = document.getElementById("show");
  x.style.display="block";
}
function opensignup()
{
	var x = document.getElementById("show");
	var y = document.getElementById("shows");
  var z = document.getElementById("fshow");
	x.style.display="none";
  z.style.display="none";
	y.style.display="block";
}




function opensignin()
{
	var x = document.getElementById("show");
	var y = document.getElementById("shows");
  var z = document.getElementById("fshow");
  var w = document.getElementById("alertrequest");
	y.style.display="none";
	x.style.display="block";
  z.style.display="none";
  w.style.display="none";

}

function openforgetlay()
{
  var x = document.getElementById("fshow");
  var y = document.getElementById("show");
	var z = document.getElementById("shows");
  var w = document.getElementById("alertrequest");
  w.style.display="none";
	y.style.display="none";
	x.style.display="block";
  z.style.display="none";
}


function checkuser()
{
  const txtemail = document.getElementById("email").value;
	const txtpass = document.getElementById("pass").value;
	const promise  = firebase.auth().signInWithEmailAndPassword(txtemail,txtpass);

  promise.then((userCredential) => {
    var x = document.getElementById("show");
    x.style.display="none";
    location.replace("/main");
    console.log(userCredential);
  })
  .catch((error) => {
    if(document.getElementById("email").value =="")
    {
      document.getElementById("eerror").style.display = "block"
      document.getElementById("eerror").innerHTML = "<b>Error ! </b> Please enter the Email  "
       setTimeout(function(){
         document.getElementById("eerror").style.display = "none"
       }, 3000);
    }
    else if(document.getElementById("pass").value =="")
    {
      document.getElementById("perror").style.display = "block"
      document.getElementById("perror").innerHTML = "<b>Error ! </b> Please enter the Password "
      setTimeout(function(){
        document.getElementById("perror").style.display = "none"
      }, 3000);}
    else {
      document.getElementById("perror").style.display = "block"
      document.getElementById("perror").innerHTML = "<b>  Please Try Again ! </b> Email or Password  is incorrect"
      setTimeout(function(){
        document.getElementById("perror").style.display = "none"
      }, 3000);
    }
	  });
}

function resetpassword()
{
  const txtemail = document.getElementById("resetname").value;
  const promise  = firebase.auth().sendPasswordResetEmail(txtemail);
  promise.then((userCredential) => {
    var x = document.getElementsByClassName("successlook");
    x[0].style.display = "block";
    setTimeout(function(){
      document.getElementById("successlook").style.display = "none"
    }, 5000);
  })
  promise.catch((error) => {
    if(document.getElementById("resetname").value =="")
    {
      document.getElementById("ererror").style.display = "block"
      document.getElementById("ererror").innerHTML = "<b>Error ! </b> Please enter the Email "
       setTimeout(function(){
         document.getElementById("ererror").style.display = "none"
       }, 3000);
    }
    else
    {
      document.getElementById("ererror").style.display = "block"
      document.getElementById("ererror").innerHTML = error.message;
       setTimeout(function(){
         document.getElementById("ererror").style.display = "none"
       }, 3000);
    }
  });
}



function adduser()
{
 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(document.getElementById("nusername").value =="")
  {
    document.getElementById("nuerror").style.display = "block"
    document.getElementById("nuerror").innerHTML = "<b>Error ! </b> Please enter the Username"
     setTimeout(function(){
       document.getElementById("nuerror").style.display = "none"
     }, 3000);

  }
  else if (document.getElementById("nuseremail").value =="")
  {
    document.getElementById("neerror").style.display = "block"
    document.getElementById("neerror").innerHTML = "<b>Error ! </b> Please enter the Email"
     setTimeout(function(){
       document.getElementById("neerror").style.display = "none"
     }, 3000);

  }
  else if (document.getElementById("nuserpassword").value =="")
  {
    document.getElementById("nperror").style.display = "block"
    document.getElementById("nperror").innerHTML = "<b>Error ! </b> Please enter the Password"
     setTimeout(function(){
       document.getElementById("nperror").style.display = "none"
     }, 3000);

  }
  else if (document.getElementById("nusercpassword").value =="")
  {
    document.getElementById("ncperror").style.display = "block"
    document.getElementById("ncperror").innerHTML = "<b>Error ! </b> Please enter here to Confirm Password"
     setTimeout(function(){
       document.getElementById("ncperror").style.display = "none"
     }, 3000);

  }
  else if (!document.getElementById("nuseremail").value.match(validRegex))
  {
    document.getElementById("neerror").style.display = "block"
    document.getElementById("neerror").innerHTML = "<b>Error ! </b> Please enter the Valid Email"
     setTimeout(function(){
       document.getElementById("neerror").style.display = "none"
     }, 3000);

  }
  else if (document.getElementById("nuserpassword").value.length < 6)
  {
    document.getElementById("nperror").style.display = "block"
    document.getElementById("nperror").innerHTML = "<b>Error ! </b> Password Should Atleat havce 6 Characters"
     setTimeout(function(){
       document.getElementById("nperror").style.display = "none"
     }, 3000);
  }
  else if (document.getElementById("nuserpassword").value != document.getElementById("nusercpassword").value )
  {
    document.getElementById("ncperror").style.display = "block"
    document.getElementById("ncperror").innerHTML = "<b>Error ! </b> Password is not the same";
     setTimeout(function(){
       document.getElementById("ncperror").style.display = "none"
     }, 3000);

  }
else
{
  const txtemail = document.getElementById("nuseremail").value;
  const txtpass = document.getElementById("nuserpassword").value;
  const promise  = firebase.auth().createUserWithEmailAndPassword(txtemail,txtpass);
  promise.then((userCredential) => {
let obj = {
  useremail: document.getElementById("nuseremail").value,
  username: document.getElementById("nusername").value,
  usertype:"Regular-email"
}
var userid = userCredential.user.uid;
firebase.database().ref('Account').child(userid).set(obj).then(() => {
location.replace("https://f2fitness-302aa.web.app");
}).catch((error) => {
console.log(error.message);
});

  }).catch((error) => {
        document.getElementById("ncperror").style.display = "block"
        document.getElementById("ncperror").innerHTML = error.message;
         setTimeout(function(){
           document.getElementById("ncperror").style.display = "none"
         }, 5000);

    });
}
}


function googlelogin()
{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    let obj = {
  useremail  :result.user.email,
  username  : result.user.displayName,
  usertype:"Google-account"
    }
    var userid = result.user.uid;
firebase.database().ref('Account').child(userid).set(obj).then(() => {
location.replace("/main");
}).catch((error) => {
  console.log(error.message);
});
  }).catch((error) => {
    console.log(error.message);
  });
}

function facebooklogin()
{
var provider = new firebase.auth.FacebookAuthProvider();
firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    let obj = {
    useremail  :result.user.email,
    username   :result.user.displayName,
    usertype   :"Facebook-account"
    }
    var userid = result.user.uid;
    firebase.database().ref('Account').child(userid).set(obj).then(() => {
      location.replace("/main");
    }).catch((error) => {
      console.log(error.message);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
}

function twitterlogin()
{
var provider = new firebase.auth.TwitterAuthProvider();
firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    let obj = {
  useremail :result.additionalUserInfo.username,
  username  : result.user.displayName,
  usertype :"twitter-account"
    }
    var userid = result.user.uid;
    firebase.database().ref('Account').child(userid).set(obj).then(() => {
      location.replace("/main");
    }).catch((error) => {
      console.log(error.message);
    });
  })
  .catch((error) => {
    console.log(error.message);

  });
}

function logout()
{
  firebase.auth().signOut().then(() => {
    location.replace("https://f2fitness-302aa.web.app");
  }).catch((error) => {
    console.log(error.message);
  });

}

function donec()
{
  let obj = {
    contactname:document.getElementById("cname").value,
    contactemail:document.getElementById("cemail").value,
    contactnum:document.getElementById("cconno").value,
    contactmsg:document.getElementById("cmsg").value,
  }

  firebase.database().ref('Contact-us').push().set(obj).then(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        location.replace("/main");
      } else {
        location.replace("https://f2fitness-302aa.web.app");
      }
    });
  }).catch((error) => {
  console.log(error.message);
  });
}


function home(){
location.replace("https://f2fitness-302aa.web.app");
}

function mhome(){
location.replace("/main");
}

function alertx()
{
  var w = document.getElementById("alertrequest");
  w.style.display = "block";
}

function savecomments1()
{
  var we = document.getElementById("cuname").innerHTML;
  var w = document.getElementById("sucessstory1").innerHTML;
  var x = w.replace(/\./g, ' ');;
  var msg = firebase.auth().currentUser.uid;
firebase.database().ref('Account').child(msg).child("useremail").on('value',   function(snapshot) {
  var childData = snapshot.val();
  let obj = {
     commenteremail: childData,
     commenterusername: we,
     usercommentMsg:document.getElementById("co1").value
   }
     firebase.database().ref('Comments').child(x).push().set(obj).then(() => {
       alert("Done");
       document.getElementById("co1").value=" ";
     }).catch((error) => {
     console.log(error.message);
     });
});
}

function savecomments2()
{
  var we = document.getElementById("cuname").innerHTML;
  var w = document.getElementById("sucessstory2").innerHTML;
  var x = w.replace(/\./g, ' ');;
  var msg = firebase.auth().currentUser.uid;
firebase.database().ref('Account').child(msg).child("useremail").on('value',   function(snapshot) {
  var childData = snapshot.val();
  let obj = {
     commenteremail: childData,
     commenterusername: we,
     usercommentMsg:document.getElementById("co2").value
   }
     firebase.database().ref('Comments').child(x).push().set(obj).then(() => {
       alert("Done");
       document.getElementById("co2").value=" ";
     }).catch((error) => {
     console.log(error.message);
     });
});
}

function savecomments3()
{
  var we = document.getElementById("cuname").innerHTML;
  var w = document.getElementById("sucessstory3").innerHTML;
  var x = w.replace(/\./g, ' ');;
  var msg = firebase.auth().currentUser.uid;
firebase.database().ref('Account').child(msg).child("useremail").on('value',   function(snapshot) {
  var childData = snapshot.val();
  let obj = {
     commenteremail: childData,
     commenterusername: we,
     usercommentMsg:document.getElementById("co3").value
   }
     firebase.database().ref('Comments').child(x).push().set(obj).then(() => {
       alert("Done");
       document.getElementById("co3").value=" ";
     }).catch((error) => {
     console.log(error.message);
     });
});
}

function savecomments4()
{
  var we = document.getElementById("cuname").innerHTML;
  var w = document.getElementById("sucessstory4").innerHTML;
  var x = w.replace(/\./g, ' ');;
  var msg = firebase.auth().currentUser.uid;
firebase.database().ref('Account').child(msg).child("useremail").on('value',   function(snapshot) {
  var childData = snapshot.val();
  let obj = {
     commenteremail: childData,
     commenterusername: we,
     usercommentMsg:document.getElementById("co4").value
   }
     firebase.database().ref('Comments').child(x).push().set(obj).then(() => {
       alert("Done");
       document.getElementById("co4").value=" ";
     }).catch((error) => {
     console.log(error.message);
     });
});
}

function savecomments5()
{
  var we = document.getElementById("cuname").innerHTML;
  var w = document.getElementById("sucessstory5").innerHTML;
  var x = w.replace(/\./g, ' ');;
  var msg = firebase.auth().currentUser.uid;
firebase.database().ref('Account').child(msg).child("useremail").on('value',   function(snapshot) {
  var childData = snapshot.val();
  let obj = {
     commenteremail: childData,
     commenterusername: we,
     usercommentMsg:document.getElementById("co5").value
   }
     firebase.database().ref('Comments').child(x).push().set(obj).then(() => {
       alert("Done");
       document.getElementById("co5").value=" ";
     }).catch((error) => {
     console.log(error.message);
     });
});
}

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
};

function opencreate()
{
  var x = document.getElementById("createdialog");
  x.style.display="block";
}
function onsuccessubmit()
{
  if(document.querySelector("#uploadImage").files[0]== null)
  {
    alert("Please Upload the image");
  }
  else if(document.getElementById("storymsg").value == "")
  {

    document.getElementById("mainerror").style.display = "block"
    document.getElementById("mainerror").innerHTML = "<b>Error ! </b> Please Write the success story"
     setTimeout(function(){
       document.getElementById("mainerror").style.display = "none"
     }, 3000);
  }
  else
  {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#uploadImage").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        let obj = {
           imgurl: url,
           storymsg:document.getElementById("storymsg").value,
           storyprovider:document.getElementById("cuname").innerHTML
         }
           firebase.database().ref('Success story').push().set(obj).then(() => {
             var x = document.getElementById("createdialog");
             x.style.display="none";
           }).catch((error) => {
           console.log(error.message);
           });
      })
      .catch(console.error);
  }

}
function fristtable()
{
  document.getElementById("allkatable").style.display = "block";
  document.getElementById("fp").style.borderBottom = "2px solid red";
  document.getElementById("sp").style.borderBottom = "none";
  document.getElementById("personalkatable").style.display = "none";
}
function secondtable()
{
  document.getElementById("personalkatable").style.display = "block";
  document.getElementById("sp").style.borderBottom = "2px solid red";
  document.getElementById("fp").style.borderBottom = "none";
  document.getElementById("allkatable").style.display = "none";
}

function viewdate()
{
  var weekname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthname=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var d = new Date();
  var weekday = d.getDay()+2;
  var  date = d.getDate()+2;
  var  month = d.getMonth();
  var year = d.getFullYear();
  var numofday = new Date(year, month, 0).getDate();
  if(weekday > 7 || date > numofday )
  {
    var xx = weekday - 7;
    if(date > numofday)
    {
      var x = date - numofday;
      var dateformat= weekname[xx]+" , " +monthname[x]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
    else{
      var dateformat= weekname[xx]+" , " +monthname[month]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
  }
  else{
    var dateformat= weekname[weekday]+" , " +monthname[month]+" "+date;
    document.getElementById("weekday").innerHTML = dateformat;
  }
}
function viewdatet()
{
  var weekname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthname=["Jan", "Feby", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var d = new Date();
  var weekday = d.getDay()+5;
  var  date = d.getDate()+5;
  var  month = d.getMonth();
  var year = d.getFullYear();
  var numofday = new Date(year, month, 0).getDate();
  if(weekday > 7 || date > numofday )
  {
    var xx = weekday - 7;
    if(date > numofday)
    {
      var x = date - numofday;
      var dateformat= weekname[xx]+" , " +monthname[x]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
    else{
      var dateformat= weekname[xx]+" , " +monthname[month]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
  }
  else{
    var dateformat= weekname[weekday]+" , " +monthname[month]+" "+date;
    document.getElementById("weekday").innerHTML = dateformat;
  }
}
function viewdatet1()
{
  var weekname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthname=["Jan", "Feby", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var d = new Date();
  var weekday = d.getDay()+6;
  var  date = d.getDate()+6;
  var  month = d.getMonth();
  var year = d.getFullYear();
  var numofday = new Date(year, month, 0).getDate();
  if(weekday > 7 || date > numofday )
  {
    var xx = weekday - 7;
    if(date > numofday)
    {
      var x = date - numofday;
      var dateformat= weekname[xx]+" , " +monthname[x]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
    else{
      var dateformat= weekname[xx]+" , " +monthname[month]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
  }
  else{
    var dateformat= weekname[weekday]+" , " +monthname[month]+" "+date;
    document.getElementById("weekday").innerHTML = dateformat;
  }
}

function viewdatet2()
{
  var weekname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var monthname=["Jan", "Feby", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var d = new Date();
  var weekday = d.getDay()+4;
  var  date = d.getDate()+4;
  var  month = d.getMonth();
  var year = d.getFullYear();
  var numofday = new Date(year, month, 0).getDate();
  if(weekday > 7 || date > numofday )
  {
    var xx = weekday - 7;
    if(date > numofday)
    {
      var x = date - numofday;
      var dateformat= weekname[xx]+" , " +monthname[x]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
    else{
      var dateformat= weekname[xx]+" , " +monthname[month]+" "+date;
      document.getElementById("weekday").innerHTML = dateformat;
    }
  }
  else{
    var dateformat= weekname[weekday]+" , " +monthname[month]+" "+date;
    document.getElementById("weekday").innerHTML = dateformat;
  }
}

function bookit(element) {
localStorage.setItem("coursename",document.getElementById("classfunctionid").rows[element.parentNode.parentNode.rowIndex].cells[0].innerHTML);
localStorage.setItem("coursedetail",document.getElementById("classfunctionid").rows[element.parentNode.parentNode.rowIndex].cells[1].innerHTML);
localStorage.setItem("cocount",document.getElementById("countofpage").innerHTML);
location.replace("/bookinglay.html");
}
function bookitp(element) {
   localStorage.setItem("coursename",document.getElementById("personalfunctionid").rows[element.parentNode.parentNode.rowIndex].cells[0].innerHTML);
   localStorage.setItem("coursedetail",document.getElementById("personalfunctionid").rows[element.parentNode.parentNode.rowIndex].cells[1].innerHTML);
   localStorage.setItem("cocount",document.getElementById("countofpage").innerHTML);
   location.replace("/bookinglay.html");
}

function bookthecourse() {
localStorage.setItem("coname",document.getElementById("thiscoursename").innerHTML);
localStorage.setItem("cotime",document.getElementById("thiscoursetime").innerHTML);
localStorage.setItem("cors",document.getElementById("thiscourseprice").innerHTML);
localStorage.setItem("cocount",document.getElementById("countofpage").innerHTML);
location.replace("/bookinglay.html");
}



function bookinglay()
{
  if(localStorage.getItem("cocount") == "0")
  {
  document.getElementById("servicename").innerHTML= localStorage.getItem("coname");
   document.getElementById("servicetp").innerHTML =localStorage.getItem("cotime");+"   |   "+localStorage.getItem("cors");
  load();
     initButtons();
  }

  else
  {
    document.getElementById("servicename").innerHTML= localStorage.getItem("coursename");
    var bookcoursedetail=localStorage.getItem("coursedetail").split("<br>");
   document.getElementById("servicetp").innerHTML =bookcoursedetail[0]+"   |   "+bookcoursedetail[1];
     load();
     initButtons();
  }

}


let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
  const dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  document.getElementById('monthDisplay').innerText =
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    var x = document.getElementsByClassName("loader");
    x[0].style.animation = "fadeout 2s";
    x[0].style.display = "none";
    document.getElementById('containerx').style.display = "block";
    document.getElementById('bookinginfo').style.display = "block";
    document.getElementById('sheduleee').style.display = "block";
    document.getElementById('xuxx').style.display = "block";
    document.getElementById('containerx').style.opacity = "1";
    document.getElementById('bookinginfo').style.animation = "fadeIn1 1s";
    document.getElementById('sheduleee').style.animation = "fadeIn1 1s";
    document.getElementById('containerx').style.animation = "fadeIn1 2s";
    document.getElementById('xuxx').style.animation = "fadeIn 2s";

    const dayString = `${(month + 1)}/${i - paddingDays}/${year} `;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }
      daySquare.addEventListener('click', () => openModal(dayString));
    }
     else {
      daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);
  }
}


function openModal(date) {
  var ddisplay = date.split("/");
  var monthname=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
localStorage.setItem("coursedate",monthname[ddisplay[0]-1]+" "+ ddisplay[1] +" , "+ddisplay[2]);
var weekname=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const dt = new Date(date).getDay();
localStorage.setItem("weekdaykanam",weekname[dt]);
document.getElementById('containerx').style.animation = "fadeout 2s";
document.getElementById('containerx').style.opacity = "0";
document.getElementById('containerx').style.display = "none";
document.getElementById('containerxi').style.display = "block";
document.getElementById('containerxi').style.opacity = "1";
document.getElementById('containerxi').style.animation = "fadeIn1 3s";
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });
}

function opentab()
{
  document.getElementById('cuponcodetext').style.display = "block";
  document.getElementById('cuponcodetext').style.opacity = "1";
  document.getElementById('cuponcodetext').style.animation = "fadeIn 2s";
  document.getElementById('proceedcoupon').style.display = "block";
  document.getElementById('proceedcoupon').style.opacity = "1";
  document.getElementById('proceedcoupon').style.animation = "fadeIn 2s";
}

function timeclick1(element)
{
var time =   document.getElementById("Morning").rows[element.parentNode.rowIndex].cells[0].innerHTML;
var date =   localStorage.getItem("coursedate");
localStorage.setItem("userkaslot",time);
document.getElementById('hr').style.display = "block";
document.getElementById('hr').style.opacity = "0.6";
document.getElementById('hr').style.animation = "fadeIn 2s";
document.getElementById('servicedatetime').style.display = "block";
document.getElementById('servicedatetime').style.opacity = "1";
document.getElementById('servicedatetime').style.animation = "fadeIn1 3s";
document.getElementById('cuponopen').style.display = "block";
document.getElementById('cuponopen').style.opacity = "1";
document.getElementById('cuponopen').style.animation = "fadeIn1 3s";
document.getElementById('donebooking').style.display = "block";
document.getElementById('donebooking').style.opacity = "1";
document.getElementById('donebooking').style.animation = "fadeIn1 3s";
document.getElementById("servicedatetime").innerHTML=date+"     " +time;
document.getElementById('serviceaddress').style.display = "block";
document.getElementById('serviceaddress').style.opacity = "1";
document.getElementById('serviceaddress').style.animation = "fadeIn1 3s";

}
function timeclick2(element)
{
  var time = document.getElementById("Afternoon").rows[element.parentNode.rowIndex].cells[0].innerHTML;
  var date =   localStorage.getItem("coursedate");
  localStorage.setItem("userkaslot",time);

  document.getElementById('hr').style.display = "block";
  document.getElementById('hr').style.opacity = "0.6";
  document.getElementById('hr').style.animation = "fadeIn 2s";
  document.getElementById('servicedatetime').style.display = "block";
  document.getElementById('servicedatetime').style.opacity = "1";
  document.getElementById('servicedatetime').style.animation = "fadeIn1 3s";
  document.getElementById('cuponopen').style.display = "block";
  document.getElementById('cuponopen').style.opacity = "1";
  document.getElementById('cuponopen').style.animation = "fadeIn1 3s";
  document.getElementById('donebooking').style.display = "block";
  document.getElementById('donebooking').style.opacity = "1";
  document.getElementById('donebooking').style.animation = "fadeIn1 3s";
  document.getElementById("servicedatetime").innerHTML=date+"     " +time;
  document.getElementById('serviceaddress').style.display = "block";
  document.getElementById('serviceaddress').style.opacity = "1";
  document.getElementById('serviceaddress').style.animation = "fadeIn1 3s";
}
function timeclick3(element)
{
  var time = document.getElementById("Evening").rows[element.parentNode.rowIndex].cells[0].innerHTML;
  var date =   localStorage.getItem("coursedate");
  localStorage.setItem("userkaslot",time);
  document.getElementById('hr').style.display = "block";
  document.getElementById('hr').style.opacity = "0.6";
  document.getElementById('hr').style.animation = "fadeIn 2s";
  document.getElementById('servicedatetime').style.display = "block";
  document.getElementById('servicedatetime').style.opacity = "1";
  document.getElementById('servicedatetime').style.animation = "fadeIn1 3s";
  document.getElementById('cuponopen').style.display = "block";
  document.getElementById('cuponopen').style.opacity = "1";
  document.getElementById('cuponopen').style.animation = "fadeIn1 3s";
  document.getElementById('donebooking').style.display = "block";
  document.getElementById('donebooking').style.opacity = "1";
  document.getElementById('donebooking').style.animation = "fadeIn1 3s";
  document.getElementById("servicedatetime").innerHTML=date+"     " +time;
  document.getElementById('serviceaddress').style.display = "block";
  document.getElementById('serviceaddress').style.opacity = "1";
  document.getElementById('serviceaddress').style.animation = "fadeIn1 3s";
}

function savethebooking()
{
var bookcoursedetail=localStorage.getItem("coursedetail").split("<br>");
var uuid = localStorage.getItem("userkauid");

let obj = {
username :localStorage.getItem("userkanaam"),
usermail : localStorage.getItem("userkaemail"),
 userbookedcoursename : localStorage.getItem("coursename"),
 userbookedcoursetimespan  : bookcoursedetail[0],
 userbookedcoursecost : bookcoursedetail[1],
 userbookedcoursedate : localStorage.getItem("coursedate"),
 userbookedcoursetime : localStorage.getItem("userkaslot")
}

firebase.database().ref('Account').child(uuid).child('Booked_Session').push().set(obj).then(() => {
  location.replace("/afterbooked.html");
}).catch((error) => {
console.log(error);
});

}



function backtodate()
{
  document.getElementById('containerxi').style.animation = "fadeout 2s";
  document.getElementById('containerxi').style.opacity = "0";
  document.getElementById('containerxi').style.display = "none";
  document.getElementById('containerx').style.display = "block";
  document.getElementById('containerx').style.opacity = "1";
  document.getElementById('containerx').style.animation = "fadeIn1 3s";
}

function successfullybooked()
{
  document.getElementById('scoursev').innerHTML = localStorage.getItem("coursename");
  var bookcoursedetail=localStorage.getItem("coursedetail").split("<br>");
  document.getElementById('spricetimev').innerHTML =bookcoursedetail[0] +"  |  "+ bookcoursedetail[1];
var dividedate=localStorage.getItem("coursedate").split(" ");
localStorage.getItem("userkaslot");
  var weekdikhado = localStorage.getItem("weekdaykanam");
  document.getElementById('sweekv').innerHTML = weekdikhado + ", " + dividedate[0] + dividedate[3] + ".";
  document.getElementById('sdatev').innerHTML = dividedate[1];
  if(localStorage.getItem("coursename").includes("Workout") == true)
  {

    document.getElementById('smemberv').innerHTML =" Personal Trainer #1 ";
    var x = document.getElementsByClassName("loader");
    x[0].style.animation = "fadeout 2s";
    x[0].style.display = "none";
    document.getElementById('sd1').style.display = "block";
    document.getElementById('sd1').style.animation = "fadeIn 1s";
    document.getElementById('sd2').style.display = "block";
    document.getElementById('sd2').style.animation = "fadeIn 1s";
    document.getElementById('sd3').style.display = "block";
    document.getElementById('sd3').style.animation = "fadeIn 1s";
    document.getElementById('hm').style.display = "block";
    document.getElementById('hm').style.animation = "fadeIn1 2s";
  }
  else
  {
    document.getElementById('smemberv').innerHTML =" Staff Member #1 ";
    var x = document.getElementsByClassName("loader");
    x[0].style.animation = "fadeout 2s";
    x[0].style.display = "none";
    document.getElementById('sd1').style.display = "block";
    document.getElementById('sd1').style.animation = "fadeIn 1s";
    document.getElementById('sd2').style.display = "block";
    document.getElementById('sd2').style.animation = "fadeIn 1s";
    document.getElementById('sd3').style.display = "block";
    document.getElementById('sd3').style.animation = "fadeIn 1s";
    document.getElementById('hm').style.display = "block";
    document.getElementById('hm').style.animation = "fadeIn1 2s";
  }

}
function gotoc()
{
  var caldate = localStorage.getItem("coursedate");
  var caltime = localStorage.getItem("userkaslot");
  var dateobj = new Date(caldate);
  var B = dateobj.toISOString();
  var c = B.replaceAll(":", "");
  var ci =c.replaceAll("-", "");
  var cv =ci.replaceAll(".", "");
  var bookcoursedetail=localStorage.getItem("coursedetail").split("<br>");
  var coursename = localStorage.getItem("coursename");
  document.getElementById('ggg').href="https://calendar.google.com/calendar/r/eventedit?text="+coursename+"&dates="+cv+"/"+cv+"&details= Today on the date of <b> "+localStorage.getItem("coursedate")+"</b>  you  have an Fitness session book with <b>F2 Fitness center</b> which is  sheduled online due to COVID-19 and the meeting link is been sended on your email detail are as Followed:<br><br> <b><i>Workout session name :</b>"+coursename+ " <br><br><b>Time span of workout : </b>"+ bookcoursedetail[0]+" <br><br><b>Date : </b>"+caltime+"</b>&location=Mumbai+,+Maharashtra+,+India";
}

function goabout()
{
location.replace("/about");
}
function goabouti()
{
location.replace("/iabout");
}

function gocontacti()
{
  location.replace("/icontact");
}

function gocontact()
{
  location.replace("/contact");
}
function gosuccessi()
{
location.replace("/isuccess");
}

function gosuccess()
{
location.replace("/success");
}
 function bookinglist() {
   location.replace("/bookinglist");
 }
 function service() {
   location.replace("/service");
 }
