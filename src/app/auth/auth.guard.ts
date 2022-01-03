import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild, NavigationExtras,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    console.log('AuthGuard#canActivate called');
    const url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn) { return true };

    this.authService.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };

    // Redirect to the login page with extras
    return this.router.createUrlTree(["/login"], navigationExtras);
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.canActivate(route, state);
  }

}
