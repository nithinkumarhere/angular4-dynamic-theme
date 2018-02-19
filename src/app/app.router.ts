import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ChannelComponent } from './channel/channel.component';

const routes : Routes = [
    { path:'', redirectTo:'/channel', pathMatch:'full'},
    { path:'channel', component:ChannelComponent},
    { path:'settings', component:SettingsComponent}
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }