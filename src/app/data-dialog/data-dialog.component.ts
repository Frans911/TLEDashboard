import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
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
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.description = data.description;
      this.dataSource = data; 
     }

  ngOnInit() {
    this.form = this.fb.group({
    ListNo:new FormControl(),
    Gender:new FormControl(),
    Occupation:'',
    Race:'',
    Age:'',
    })
    console.log(this.dataSource)
    console.log(this.form.value);
  }
  save() {
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}
close() {
  this.dialogRef.close();
}
update(){

}
delete(){ 
  firebase.database().ref('people/'+this.dataSource.key).remove(); 
  this.dialogRef.close();
  
}
}
