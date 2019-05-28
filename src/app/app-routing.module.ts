import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ParentComponent } from './views/parent/parent.component';
import { LinearComponent } from './views/linear/linear.component';
import { TopComponent } from './views/top/top.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

export const COMPONENTS = [LoginComponent, HomeComponent]

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "parent", loadChildren: "~/app/views/parent/parent.module#ParentModule"},

];

@NgModule({
    imports: [
      NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
