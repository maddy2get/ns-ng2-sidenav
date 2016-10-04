// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { SideDrawerGettingStartedComponent } from "./app.component";
import { FirstComponent, APP_ROUTES } from "./navigation/first.component";
import { SecondComponent } from "./navigation/second.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [FirstComponent],
    declarations: [
        FirstComponent,
        SecondComponent,
        SIDEDRAWER_DIRECTIVES],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);


// @NgModule({
//     declarations: [
//         SideDrawerGettingStartedComponent,
//         SIDEDRAWER_DIRECTIVES],
//     bootstrap: [SideDrawerGettingStartedComponent],
//     imports: [
//         NativeScriptModule,
//         NativeScriptFormsModule,
//         NativeScriptRouterModule,],
// })
// class AppComponentModule { }

// platformNativeScriptDynamic().bootstrapModule(AppComponentModule);