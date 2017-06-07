import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VooksComponent } from './vooks/vooks.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { VookDetailComponent } from './vooks/vook-detail/vook-detail.component';
import { VookListComponent } from './vooks/vook-list/vook-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { VookItemComponent } from './vooks/vook-list/vook-item/vook-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VooksComponent,
    ShoppingListComponent,
    VookDetailComponent,
    VookListComponent,
    ShoppingEditComponent,
    VookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
