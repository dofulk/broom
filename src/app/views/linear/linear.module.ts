import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LinearComponent } from "./linear.component"
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MessageComponent } from '../../shared/message/message.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "linear" },
            { path: "linear", component: LinearComponent },
        ])
    ],
    declarations: [
        LinearComponent,
        MessageComponent
    ],
    providers: [
 
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LinearModule { }
