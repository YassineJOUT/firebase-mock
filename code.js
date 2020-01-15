(function(){
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDWYcdDdTSP1Bvc9FLqZotwXMD8YvrrLd0",
    authDomain: "iottest-c12ce.firebaseapp.com",
    databaseURL: "https://iottest-c12ce.firebaseio.com",
    projectId: "iottest-c12ce",
    storageBucket: "iottest-c12ce.appspot.com",
    messagingSenderId: "651752495503",
    appId: "1:651752495503:web:59f33547fef606d5cd93fa"
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