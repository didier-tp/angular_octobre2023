import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { SessionService } from "../service/session.service";

@Injectable({
    providedIn: 'root'
    })
export class CanActivateAdminRouteGuard /*implements CanActivate */{
    constructor(private _sessionService: SessionService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if(this._sessionService.isConnected){
       return true;
    }
    else{
      //return false;
      //NB: since v7.1 , canActivate can return a UrlTree for redirecting (and not only blocking):
       return this.router.parseUrl('/not-authorized');
      //or this.router.createUrlTree(['/not-authorized']);
    }
    }
    }