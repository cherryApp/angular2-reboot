import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  private _config: Object = {};
  private _env: Object = {};
  constructor() {
    this.set('appTitle', "Nyugdíjas Paradicsom");
   }

  getEnv(key: any) {
    return this._env[key];
  }

  get(key: any) {
    return this._config[key];
  }

  set(key: string, val: any) {
    this._config[key] = val;
  }
};
