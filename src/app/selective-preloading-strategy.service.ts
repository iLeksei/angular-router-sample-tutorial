import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.path !== null && route.path !== undefined && route.data?.["preload"]) {
      this.preloadedModules.push(route.path);

      console.log('Preloaded module: ' + route.path);

      return load();
    } else {
      return of(null);
    }
  }
}
