import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { TemplatereferencebindingComponent } from './templatereferencebinding/templatereferencebinding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    PropertybindingComponent,
    TemplatereferencebindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
