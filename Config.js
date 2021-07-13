import * as firebase from "firebase"


require("@firebase/firestore")
/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNJ7EfLU_Y4_jkbjMV91CWYFnt5v5UGaY",
    authDomain: "wily-app-c7453.firebaseapp.com",
    databaseURL: "https://wily-app-c7453-default-rtdb.firebaseio.com",
    projectId: "wily-app-c7453",
    storageBucket: "wily-app-c7453.appspot.com",
    messagingSenderId: "959769182224",
    appId: "1:959769182224:web:c29bfb206b96414c5c4a95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>*/


   
const firebaseConfig = {
    apiKey: "AIzaSyBNJ7EfLU_Y4_jkbjMV91CWYFnt5v5UGaY",
    authDomain: "wily-app-c7453.firebaseapp.com",
    databaseURL: "https://wily-app-c7453-default-rtdb.firebaseio.com",
    projectId: "wily-app-c7453",
    storageBucket: "wily-app-c7453.appspot.com",
    messagingSenderId: "959769182224",
    appId: "1:959769182224:web:c29bfb206b96414c5c4a95"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  } 


export default firebase.firstore(); 