import {Injectable, OnInit} from '@angular/core';
import {EMPTY, mergeMap, Observable, of, switchMap, take} from "rxjs";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ParamMap,
  Resolve,
  Route,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {Crisis} from "./crisis";
import {CrisisService} from "./crisis.service";

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    const id = route.paramMap.get('id')!;

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
