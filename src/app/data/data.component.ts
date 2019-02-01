import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
    this.dataSource = []; 
    firebase.database().ref('people/').on("value",(snapshot) =>{
      snapshot.forEach(element => { 
        this.index = this.index + 1;
        this.dataSource.push({position:this.index,gender:element.val().Gender,race:element.val().Race,occupation:element.val().Occupation,age:element.val().Age})
       }); 
    }) 
  //  this.dataSource = ELEMENT_DATA; 
   
  }

}
