import { DataComponent } from './app/data/data.component';
import { AnalysisComponent } from './app/analysis/analysis.component';
import { HomeComponent } from './app/home/home.component';
import { OptionsComponent } from './app/options/options.component';


export const routes = [ 
    {path:'',component:HomeComponent,children:[
        {path:'',component:AnalysisComponent},
        {path:'Data',component:DataComponent},
        {path:'Options',component:OptionsComponent}
    ]}
];