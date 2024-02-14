import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { of } from 'rxjs';

export const authGardGuard: CanActivateFn = (route, state) => {
  let token = sessionStorage.getItem("authToken");
  console.log("authGardGuard with token="+token);
  if(token!=null && token!= "" && token != "null") return true;
  //else return false;
  else return  of(createUrlTreeFromSnapshot(route, ['../ngr-login']));
  //ou bien return this.router.parseUrl('/ngr-not-authorized');
};
