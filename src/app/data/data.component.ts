import { element } from 'protractor';
import { DataDialogComponent } from './../data-dialog/data-dialog.component';
import { Component, OnInit } from '@angular/core'; 
import { MatDialog,MatDialogConfig } from '@angular/material' 
import { Router } from '@angular/router'; 
declare var firebase;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  displayedColumns: string[] = [ 'gender', 'race', 'occupation','age'];
  index = 0;
  dataSource = [];
  mockData = [];
  constructor(private dialog:MatDialog,private rouets:Router) {
    this.retrieveData();
    console.log('Instiniate');
   }

  ngOnInit() {
    console.log('Initialize'); 
  //  this.dataSource = ELEMENT_DATA;  
  }
  retrieveData(){
    this.dataSource = [];  
    this.mockData = [];
    firebase.database().ref('people/').once("value",(snapshot) =>{
      snapshot.forEach(element => { 
        this.dataSource.push({position:this.index,gender:element.val().Gender,race:element.val().Race,occupation:element.val().Occupation,age:element.val().Age,key:element.key}) 
        this.mockData = this.dataSource; 
       }); 
    }) 
  }
  openDialog(e) {
    this.rouets.navigate(['Home'])
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
