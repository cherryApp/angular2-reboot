import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(private titleService: Title, private _config: Config ) { }

  ngOnInit() {
    this.titleService.setTitle(
      this._config.get('appTitle')
    );
  }
}
