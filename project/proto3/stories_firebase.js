var config = {
  apiKey: "AIzaSyBU-4i6aqE_eNY3IosjA7ycNm33FXCF7eM",
  authDomain: "unspoken-37e98.firebaseapp.com",
  databaseURL: "https://unspoken-37e98.firebaseio.com",
  projectId: "unspoken-37e98",
  storageBucket: "",
  messagingSenderId: "161766093627"
};
firebase.initializeApp(config);

var values;


//how to tie in with 3D --> add event listeners on the particles and let them retrieve 
// a random post from the database

//testing
console.log('about to bind on value');
var newMessageRef = firebase.database().ref('messages');
newMessageRef.on('value', function (snapshot) {

  // stores the value of the ref as a js Object
  console.log('val:');
  values = snapshot.val();
  console.log(values); // prints values to console

  // iterates through children of the ref
  console.log('forEach:');
  snapshot.forEach(function (childSnapshot) {
    console.log(childSnapshot.key);
    console.log(childSnapshot.val());
    document.getElementById("demo").innerHTML = childSnapshot.key;
    document.getElementById("demo").innerHTML = "<br />" + childSnapshot.val();
  }); // for each child, print the key and value to console


  //test
  // var value = values[Math.random()];
});
