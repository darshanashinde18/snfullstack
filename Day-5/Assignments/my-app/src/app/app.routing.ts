import {RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { UserDetailsComponent } from './user-details/user-details.component'
// import { PortfolioComponent } from './portfolio/portfolio.component'


 export const USER_ROUTE= RouterModule.forRoot([
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'userdetails', component:UserDetailsComponent}
// {path:'portfolio', component:PortfolioComponent}


 ])
 