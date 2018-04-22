import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {QuestListComponent} from './quest-list/quest-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material';

import {FilterPokemonPipe} from './pipes/filter-pokemon.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './pipes/search.pipe';
import {QuestListService} from './services/quest-list/quest-list.service';
import {AppRoutingModule} from './app-routing.module';
import {AdminInterfaceComponent} from './admin-interface/admin-interface.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FilterQuestTypesPipe} from './pipes/filter-quest-types.pipe';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/language/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    QuestListComponent,
    FilterPokemonPipe,
    SearchPipe,
    AdminInterfaceComponent,
    AdminLoginComponent,
    FilterQuestTypesPipe,
  ],
  imports:
    [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      }),
      NgbModule.forRoot(),
      FormsModule,
      MatListModule,
      MatIconModule,
      MatDividerModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatSelectModule,
      MatToolbarModule,
      AppRoutingModule,
      NgSelectModule,
    ],
  providers: [QuestListService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
