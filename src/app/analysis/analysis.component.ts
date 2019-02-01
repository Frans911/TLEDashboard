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

  Ages = [];
  AgesRates = [];
  noUnder12 = 0;
  no12to17 = 0;
  no18to24 = 0;
  no25to34 = 0;
  no35to44 = 0;
  no45to54 = 0;
  no55to64 = 0;
  no65to74 = 0;
  no75andAbove = 0;
  
  constructor() { } 
  ngOnInit() {
   
    firebase.database().ref('people/').on("value",(snapshot) =>{
      snapshot.forEach(element => {   
        //Populate arrays
        this.people.push({Occupation:element.val().Occupation,Race:element.val().Race,Age:element.val().Age,Gender:element.val().Gender,LocationX:element.val().Location.Lat,LocationY:element.val().Location.Lat}); 
        this.genderName.push({Gender:element.val().Gender})
        this.Races.push({Race:element.val().Race})
        this.Careers.push({Occupation:element.val().Occupation})
        this.Ages.push({Age:element.val().Age}) 

        if(element.val().Age == "Under 12"){
          this.noUnder12 = this.noUnder12 + 1
        }else if(element.val().Age == "12-17"){
          this.no12to17 = this.no12to17 + 1
        }else if(element.val().Age == "18-24"){
          this.no18to24 = this.no18to24 + 1;
        }else if(element.val().Age == "25-34"){
          this.no25to34 = this.no25to34 + 1
        }else if(element.val().Age == "35-44"){
          this.no35to44 = this.no35to44 + 1
        }else if(element.val().Age == "45-54"){
          this.no45to54 = this.no45to54 + 1
        }else if(element.val().Age == "55-64"){
          this.no55to64 = this.no55to64 + 1
        }else if(element.val().Age == "65-74"){
          this.no65to74 = this.no65to74 + 1
        }else if(element.val().Age == "75 and above"){
          this.no75andAbove = this.no75andAbove + 1
        }

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
      this.CareersRates[5] = ((this.noOthers/this.Careers.length)*100).toFixed(0); 
    
      this.AgesRates[0] = ((this.noUnder12/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[1] = ((this.no12to17/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[2] = ((this.no18to24/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[3] = ((this.no25to34/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[4] = ((this.no35to44/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[5] = ((this.no45to54/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[6] = ((this.no55to64/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[7] = ((this.no65to74/this.Ages.length)*100).toFixed(0); 
      this.AgesRates[8] = ((this.no75andAbove/this.Ages.length)*100).toFixed(0); 

      new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ["under 12","12-17","18-24","25-34","35-44","45-54","55-64","65-74","75 and above"],
          datasets: [{ 
              data: this.AgesRates,
              label: "Age group",
              borderColor: "#3e95cd",
              fill: false
            }, 
          ]
        },
        options: {
          
        }
      });
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
      labels: ["Vendors", "Beggers", "Promoters", "Job Seekers", "Windshield Cleaner","Others"],
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
