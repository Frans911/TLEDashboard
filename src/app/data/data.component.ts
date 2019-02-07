import { element } from 'protractor';
import { DataDialogComponent } from './../data-dialog/data-dialog.component';
import { Component, OnInit } from '@angular/core'; 
import { MatDialog,MatDialogConfig } from '@angular/material' 
declare var firebase;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'gender', 'race', 'occupation','age'];
  index = 0;
  dataSource;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    this.dataSource = [];  
    firebase.database().ref('people/').on("value",(snapshot) =>{
      snapshot.forEach(element => { 
        this.index = this.index + 1;
        this.dataSource.push({position:this.index,gender:element.val().Gender,race:element.val().Race,occupation:element.val().Occupation,age:element.val().Age,key:element.key}) 
       }); 
    }) 
  //  this.dataSource = ELEMENT_DATA;  
  }
  openDialog(e) {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {
    position:e.position,
    gender:e.gender,
    race:e.race,
    occupation:e.occupation,
    age:e.age,
    key:e.key
  };
    this.dialog.open(DataDialogComponent, dialogConfig);
}
  update(e){ 
     alert(e.key)
  }
}
