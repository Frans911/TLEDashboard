import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material'; 
import { Router } from '@angular/router';  
import { dataSource } from '../mocks/dataSource';
declare var firebase;
@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css']
})
export class DataDialogComponent implements OnInit {
  form:FormGroup;
  description:string;
  dataSource; 
  constructor(private routes:Router,private fb:FormBuilder,private dialogRef:MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.description = data.description;
      this.dataSource = data; 
     }

  ngOnInit() {
    this.form = this.fb.group({
    ListNo:new FormControl(this.dataSource.position,Validators.required),
    Gender:new FormControl(this.dataSource.gender,Validators.required),
    Occupation:new FormControl(this.dataSource.occupation,Validators.required),
    Race:new FormControl(this.dataSource.race,Validators.required),
    Age:new FormControl(this.dataSource.age,Validators.required),
    })
    console.log(this.dataSource)
    console.log(this.form.value);
  } 
close() {
  this.routes.navigate(['Home/Data'])
  this.dialogRef.close();
  
}
update(){
firebase.database().ref('people/'+this.dataSource.key).update({
  Gender:this.form.value.Gender,Race:this.form.value.Race,Occupation:this.form.value.Occupation,Age:this.form.value.Age
}).then(result =>{ 
  this.dialogRef.close();
  this.routes.navigate(['Home/Data'])
}); 
}
delete(){ 
  firebase.database().ref('people/'+this.dataSource.key).remove(); 
  this.dialogRef.close(); 
  this.routes.navigate(['Home/Data'])
}
}
