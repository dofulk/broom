import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TopComponent } from "./top.component"
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MessageComponent } from '../../shared/message/message.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "top" },
            { path: "top", component: TopComponent },
        ])
    ],
    declarations: [
        TopComponent,
    ],
    providers: [
        MessageComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TopModule { }
