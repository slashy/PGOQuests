import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    QuestListComponent,
    FilterOptionsComponent,
  ],
  imports:
      [
        BrowserModule,
        NgbModule.forRoot(),
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
      ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
