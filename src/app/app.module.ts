import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { UosbatchComponent } from './uosbatch/uosbatch.component';
import { DojbatchComponent } from './dojbatch/dojbatch.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'dojbatch',
    component: DojbatchComponent
  },
  {
    path: 'uosbatch',
    component: UosbatchComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UosbatchComponent,
    DojbatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
