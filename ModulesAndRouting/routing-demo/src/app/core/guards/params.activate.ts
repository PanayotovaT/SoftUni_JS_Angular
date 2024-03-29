import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class ParamsActivate implements CanActivate{
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {

    const {data: {paramsActivate, paramsActivateRedirectUrl}} = route;

    if(!paramsActivate||!Array.isArray(paramsActivate) || paramsActivate.length == 0) {
      return true;
    }
    const hasAllRouteParams = paramsActivate.reduce((acc, currParamName)=> {
        return !!route.params[currParamName] && acc
    }, true);
    if(hasAllRouteParams) {
      return true;
    }

    return this.router.parseUrl(paramsActivateRedirectUrl || '/node_modules');

  }
}
