import { Component, OnInit } from '@angular/core'; 
declare let L; 
declare var firebase;
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit { 
  map: any;
  lat:any;
  lng:any;
  city:string;
  people:Array<any> = [];
  constructor() { }

  ngOnInit() { 
    var peopleLocation = [

    ]
    this.map = L.map("map",{zoomControl:true}).fitWorld();
    firebase.database().ref('people/').on("value",(snapshot) =>{
      snapshot.forEach(element => {  
      this.people.push({Occupation:element.val().Occupation,Race:element.val().Race,Age:element.val().Age,Gender:element.val().Gender,LocationX:element.val().Location.Lat,LocationY:element.val().Location.Lat}); 
      peopleLocation.push([element.val().Occupation,element.val().Location.Lat,element.val().Location.Lng,element.val().Race,element.val().Age,element.val().Gender]);
 
      console.log(this.people);
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 80
      }).addTo(this.map);
      this.map.locate({
      setView:true,
        
      maxZoom:10
     }).on('locationfound', (e) => {   
          console.log('Your location has been found');
         let markerGroup =L.featureGroup();
         for (var i = 0; i < peopleLocation.length; i++) {
        let  marker = new L.circle([peopleLocation[i][1],peopleLocation[i][2]],{
          color: '#1ABC9C',
          fillColor: '#1ABC9C',
          fillOpacity: 0.5,
          radius: 500
        })
            .bindPopup("<b>Informarion</b>"+ " <br>"+peopleLocation[i][0]+"<br>"+peopleLocation[i][3]+"<br>"+peopleLocation[i][4]+" age <br>"+peopleLocation[i][5])
            .addTo(this.map); 
        }  
        
          this.map.addLayer(markerGroup);
           })  
       });
       
       this.map.on('click', this.onMapClick);
    })  
  }
  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

}
