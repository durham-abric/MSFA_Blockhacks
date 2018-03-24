import * as firebase from 'firebase'

var config = {
        apiKey: "AIzaSyC-1TqkF2wsN_-DcNyfZ76TZmJRJsJcIK8",
        authDomain: "msfa-blockhacks.firebaseapp.com",
        databaseURL: "https://msfa-blockhacks.firebaseio.com",
        projectId: "msfa-blockhacks",
        storageBucket: "msfa-blockhacks.appspot.com",
        messagingSenderId: "629247823367"
};

export const init=()=>{
    firebase.initializeApp(config);
}

export const logout =()=>{
    firebase.auth().signOut().then(function(){
    }).catch(()=>alert("Failed"))
}
