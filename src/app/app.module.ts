import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { ContentComponent } from './content/content.component';

import { Config } from './config';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavSidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  title = 'app works!';

  constructor(private _config: Config) { }

  ngOnInit() {
    this.title = this._config.get('appTitle');
  }
}

