import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { LinearComponent } from "../linear/linear.component"
import { ParentComponent } from "./parent.component";
import { TopComponent } from "../top/top.component";





@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
        path: "default", component: ParentComponent, children: [
          {
            path: "linear",
            outlet: "linearTab",
            component: LinearComponent,
          },
          {
            path: "top",
            outlet: "topTab",
            component: NSEmptyOutletComponent,
          }
        ]
      }
    ])
  ],
  declarations: [
    ParentComponent,
    LinearComponent,
    TopComponent
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ParentModule { }
