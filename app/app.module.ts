import { NgModule }      from '@angular/core';
import { routing,
    appRoutingProviders } from './app.routing';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { LibraryComponent } from './library/library.component';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [ BrowserModule,
        FormsModule, routing],
    declarations: [AppComponent, LibraryComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
