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
  
  
  
  ref.addChildEventListener(new ChildEventListener() {
    @Override
    public void onChildAdded(DataSnapshot dataSnapshot, String prevChildKey) {
      Post newPost = dataSnapshot.getValue(Post.class);
      System.out.println("Author: " + newPost.author);
      System.out.println("Title: " + newPost.title);
      System.out.println("Previous Post ID: " + prevChildKey);
    }
  
    @Override
    public void onChildChanged(DataSnapshot dataSnapshot, String prevChildKey);
  
    @Override
    public void onChildRemoved(DataSnapshot dataSnapshot)
  
    @Override
    public void onChildMoved(DataSnapshot dataSnapshot, String prevChildKey);
  
    @Override
    public void onCancelled(DatabaseError databaseError);
  });