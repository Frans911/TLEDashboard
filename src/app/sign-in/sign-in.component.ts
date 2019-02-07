import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var firebase;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email;
  password;
  constructor(private routes:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  SignIn(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      this.snackBar.open(error.message, "Error", {
        duration: 4000,
      });
    });
    this.snackBar.open("You've successfully logged in", "Enjoy", {
      duration: 4000,
    });
    this.routes.navigate(['Home/Analysis']);
  }
}
