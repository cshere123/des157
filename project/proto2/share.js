//SCRIPT JS-------------------------------------//


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBU-4i6aqE_eNY3IosjA7ycNm33FXCF7eM",
  authDomain: "unspoken-37e98.firebaseapp.com",
  databaseURL: "https://unspoken-37e98.firebaseio.com",
  projectId: "unspoken-37e98",
  storageBucket: "",
  messagingSenderId: "161766093627"
};
firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');


// document.getElementById('shareform').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var year = getInputVal('year');
  var major = getInputVal('major');
  var healing = getInputVal('healing');
  var home = getInputVal('home');
  var workschool = getInputVal('workschool');
  var personal = getInputVal('personal');
  var title = getInputVal('title');
  var share = getInputVal('share');
  var triggerwarning = getInputVal('triggerwarning');
  var emailstory = getInputVal('emailstory');

  //save message
  saveMessage(name, email, year, major, healing, home, workschool, personal, title, share, triggerwarning, emailstory);

  //clear form after submission
  document.getElementById('shareform').reset().loadNewPage('stories.html');
}

//function to get getform values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, year, major, healing, home, workschool, personal, title, share, triggerwarning, emailstory) {
  var newMessageRef = messagesRef.push();
  //sending an object of data to our messages collection in firebase
  newMessageRef.set({
    name: name,
    email: email,
    year: year,
    major: major,
    healing: healing,
    home: home,
    workschool: workschool,
    personal: personal,
    title: title,
    share: share,
    triggerwarning: triggerwarning,
    emailstory: emailstory,
  });
}


