import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
declare var firebase;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email;
  password;
  constructor(private routes:Router,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  SignUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode+"-----------"+errorMessage)
    });
    this.snackBar.open("You've successfully registered", "Hello", {
      duration: 4000,
    });
    this.routes.navigate(['']);
  }
}
