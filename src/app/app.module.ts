import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextService } from './text-service/text.service';
import { DbService } from './db-service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SynonymsService } from './synonyms-service/synonyms.service';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DbService)
  ],
  providers: [TextService,
    SynonymsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
