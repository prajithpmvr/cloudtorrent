/* globals app,window */

app.controller('LoginController',function($scope){
    $scope.IsVisible = false
    $scope.IsTrue = false;
var us = "admin@cloudtorrent.ml";
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.IsVisible = $scope.IsVisible = true;
            NProgress.done();
            if(user.email == us){
                $scope.IsTrue = true;
            }
        } else {
            }
    });

    $scope.ShowHide = function(){
        NProgress.configure({ showSpinner: false });
        NProgress.start();
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
            NProgress.done();
            document.getElementById("login").reset();
            $scope.IsVisible = $scope.IsVisible = false;
        });

    }
});


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlbldu0ysEpI3DKibq9jeqi24tt2u6Zxs",
    authDomain: "cloudtorrent-171612.firebaseapp.com",
    databaseURL: "https://cloudtorrent-171612.firebaseio.com",
    projectId: "cloudtorrent-171612",
    storageBucket: "",
    messagingSenderId: "215185167647"
};
firebase.initializeApp(config);
