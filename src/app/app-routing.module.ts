import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ParentComponent } from './parent/parent.component';
import { LinearComponent } from './linear/linear.component';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const COMPONENTS = [LoginComponent, HomeComponent]

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "parent", loadChildren: "~/app/parent/parent.module#ParentModule"},

];

@NgModule({
    imports: [
      NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
