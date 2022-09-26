import {RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'
import { UserdetailsComponent } from './userdetails/userdetails.component'
import { PortfolioComponent } from './portfolio/portfolio.component'


 export const USER_ROUTE= RouterModule.forRoot([
{path:'login', component:LoginComponent},
{path:'register', component:RegistrationComponent},
{path:'userdetails', component:UserdetailsComponent},
{path:'portfolio', component:PortfolioComponent}


 ])
 