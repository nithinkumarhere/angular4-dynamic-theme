import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { SettingsComponent } from './settings/settings.component';
import { ChannelComponent } from './channel/channel.component';
import { SharedModule } from './shared/shared.module';
import { ChannelService } from './channel/channel.service';


@NgModule({
    declarations: [
        AppComponent,
        SettingsComponent,
        ChannelComponent,
    ],
    imports: [
        BrowserModule,
        AppRouter,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        ChannelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
