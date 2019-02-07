import { DataComponent } from './app/data/data.component';
import { AnalysisComponent } from './app/analysis/analysis.component';
import { HomeComponent } from './app/home/home.component';
import { OptionsComponent } from './app/options/options.component';
import { SignInComponent } from './app/sign-in/sign-in.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';


export const routes = [ 
    {path:'',component:SignInComponent},
    {path:'SignUp',component:SignUpComponent},
    {path:'Home',component:HomeComponent,children:[
        {path:'Analysis',component:AnalysisComponent},
        {path:'Data',component:DataComponent},
        {path:'Options',component:OptionsComponent}
    ]}
];