import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslationModule } from './modules/translation/translation.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './core/core.module';
import { NavigationService } from './core/navigation/navigation.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        TranslationModule,
        HttpClientModule,
        HomeModule,
        CoreModule
    ],
    providers: [
        NavigationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
