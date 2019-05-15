import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ParentComponent } from "./parent.component";


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
            component: NSEmptyOutletComponent,
            loadChildren: "~/app/linear/linear.module#LinearModule",
          },
          {
            path: "top",
            outlet: "topTab",
            component: NSEmptyOutletComponent,
            loadChildren: "~/app/top/top.module#TopModule"
          }
        ]
      }
    ])
  ],
  declarations: [
    ParentComponent
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ParentModule { }
