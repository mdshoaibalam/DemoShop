import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
//import { TodosComponent } from "./todos/todos.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes:Routes =[
{path:'home',component:HomeComponent},
//{path:'todos',component:TodosComponent},
{path:'',pathMatch:'full',redirectTo:'/home'},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}