import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateStoreModule } from './state-store';
import { MyFormComponent } from './components/my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MyFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StateStoreModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
