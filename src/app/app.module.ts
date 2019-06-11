import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TshellComponent } from './tshell/tshell.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CodemirrorModule } from 'ng2-codemirror';

const appRoutes: Routes = [
  {
    path: 'query',
    component: TshellComponent,
    data: { title: 'Data List' }
  }]
@NgModule({
  declarations: [
    AppComponent,
    TshellComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
