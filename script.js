var authstyle
var uniuser
var i=1
const firebaseConfig = {
  apiKey: "AIzaSyDCGhnUcJCkvOB3lBrknTbtaHU5qAjisIs",
  authDomain: "hacathon-login.firebaseapp.com",
  databaseURL: "https://hacathon-login-default-rtdb.firebaseio.com",
  projectId: "hacathon-login",
  storageBucket: "hacathon-login.appspot.com",
  messagingSenderId: "552244573786",
  appId: "1:552244573786:web:fa0f830f9856122a698a63"
}; 
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function login() {
  InitLogin();;
   authstyle = 'li'
}


function signup(){
  InitLogin();
   authstyle = 'su'
}
function AfterAuth(){
  window.open('/home/index.html','_self')
}