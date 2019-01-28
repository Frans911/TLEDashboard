import { element } from 'protractor';
 
import { Component, OnInit } from '@angular/core'; 
import { Chart } from 'chart.js'
import { load } from '@angular/core/src/render3/instructions';
declare var firebase;
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  people:Array<any> = [];
  genderRate = [];
  genderName:Array<any> = [];
  numberMale = 0;
  numberFemale = 0;

  Races = [];
  RacesRates = [];
  noAfricans = 0;
  noColoureds = 0;
  noWhites = 0;
  noIndian = 0;
  noOther = 0;

  Careers = [];
  CareersRates = [];
  noVendors = 0;
  noBeggers = 0;
  noPromoters = 0;
  noJobSeekers = 0;
  noWindshieldCleaners = 0;
  noOthers = 0;
  constructor() { } 
  ngOnInit() {
   
    firebase.database().ref('people/').on("value",(snapshot) =>{
      snapshot.forEach(element => {   
        //Populate arrays
        this.people.push({Occupation:element.val().Occupation,Race:element.val().Race,Age:element.val().Age,Gender:element.val().Gender,LocationX:element.val().Location.Lat,LocationY:element.val().Location.Lat}); 
        this.genderName.push({Gender:element.val().Gender})
        this.Races.push({Race:element.val().Race})
        this.Careers.push({Occupation:element.val().Occupation})
        //Validate gender
        if(element.val().Gender === 'Female'){  
          this.numberFemale = this.numberFemale + 1; 
        }else if(element.val().Gender === 'Male'){ 
          this.numberMale = this.numberMale + 1;  
        }

        //Validate Race
        if(element.val().Race === 'African'){
          this.noAfricans = this.noAfricans + 1;
        }else  if(element.val().Race === 'Coloured'){
          this.noColoureds = this.noColoureds + 1;
        }else  if(element.val().Race === 'White'){
          this.noWhites = this.noWhites + 1;
        }else  if(element.val().Race === 'Indian'){
          this.noIndian = this.noIndian + 1;
        }else  if(element.val().Race === 'Other'){
          this.noOther = this.noOther + 1;
        }

        //Validate Careers
        if(element.val().Occupation === 'Vendor'){
          this.noVendors = this.noVendors + 1;
        }else  if(element.val().Occupation === 'Begger'){
          this.noBeggers = this.noBeggers + 1;
        }else  if(element.val().Occupation === 'Promoters'){
          this.noPromoters = this.noPromoters + 1;
        }else if(element.val().Occupation === 'Job Seeker'){
          this.noJobSeekers = this.noJobSeekers + 1;
        }else  if(element.val().Occupation === 'Windshield Cleaner'){
          this.noWindshieldCleaners = this.noWindshieldCleaners + 1;
        }else  if(element.val().Occupation === 'Other'){
          this.noOthers = this.noOthers +1;
        }
      })  
      //Populate manually 
      console.log(this.Careers)
      this.genderRate[0] = ((this.numberMale/this.genderName.length)*100).toFixed(0);
      this.genderRate[1] = ((this.numberFemale/this.genderName.length)*100).toFixed(0);
     
      this.RacesRates[0] = ((this.noAfricans/this.Races.length)*100).toFixed(0); 
      this.RacesRates[1] = ((this.noColoureds/this.Races.length)*100).toFixed(0); 
      this.RacesRates[2] = ((this.noWhites/this.Races.length)*100).toFixed(0); 
      this.RacesRates[3] = ((this.noIndian/this.Races.length)*100).toFixed(0); 
      this.RacesRates[4] = ((this.noOther/this.Races.length)*100).toFixed(0); 
      
      this.CareersRates[0] = ((this.noVendors/this.Careers.length)*100).toFixed(0); 
      this.CareersRates[1] = ((this.noBeggers/this.Careers.length)*100).toFixed(0); 
      this.CareersRates[2] = ((this.noPromoters/this.Careers.length)*100).toFixed(0); 
      this.CareersRates[3] = ((this.noJobSeekers/this.Careers.length)*100).toFixed(0); 
      this.CareersRates[4] = ((this.noWindshieldCleaners/this.Careers.length)*100).toFixed(0); 
      this.CareersRates[4] = ((this.noOthers/this.Careers.length)*100).toFixed(0); 
    var data = {
      datasets: [{
          data: this.genderRate,
          backgroundColor: [
            'rgba(54, 162, 235,0.5)', 
            'rgba(255, 99, 132, 0.5)',
        ],
      }],
      
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Male","Female"]
  };
    var ctx = document.getElementById("PieChart");  
    var myPieChart = new Chart(ctx,{ 
      type: 'doughnut',
      data: data, 
  }); 
  var ctx = document.getElementById("barChart");
  var myBarChart = new Chart(ctx,{
    type:'bar',
    data: {
      labels: ["African", "Coloured", "White", "Indian", "Other"],
      datasets: [{
          label: 'Race based information',
          data:this.RacesRates,
          backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
  })
  var ctx = document.getElementById("PolarAreaChart"); 
  var myPolarAreaChart = new Chart(ctx,{
    type:'polarArea',
    data: {
      labels: ["Vendors", "Beggers", "Promoters", "Job Seekers", "Windshield Cleaner"],
      datasets: [{
          label: 'Race based',
          data:this.CareersRates,
          backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
  })
    })  
  } 
  
}
