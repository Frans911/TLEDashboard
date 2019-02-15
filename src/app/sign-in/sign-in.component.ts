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
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user =>{
      console.log(user)
      this.routes.navigate(['Home/Analysis']);
      this.snackBar.open("You've successfully logged in", "Enjoy", {
        duration: 4000,
      });
    }).catch(error => { 
      this.snackBar.open(error, "Error", {
        duration: 4000,
      });
    });
   
   
    
  }
}
