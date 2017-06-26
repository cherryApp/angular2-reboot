import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  private title = '';
  constructor(private _config: Config) { }

  ngOnInit() {
    this.title = this._config.get('appTitle');
  }

}
