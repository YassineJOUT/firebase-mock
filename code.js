(function(){
 // Your web app's Firebase configuration
 var firebaseConfig = {
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   /*firebase.database().ref("data").set({
    temp: 12,
     humidity: 60
  });
  console.log(done);*/

  setInterval(() => {
    const dbObj = firebase.database().ref('data').set({
        temp:Math.floor(Math.random() * 50)+'',
        humidity:Math.floor(Math.random() * 100)+'%'
    });
  }, 3000);
  

  //dbObj.on('value', chunk => console.log(chunk.val()));
  })();