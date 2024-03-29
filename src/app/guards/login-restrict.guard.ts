import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginRestrictGuard implements CanActivate {

  constructor(
    private storage: Storage
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise<boolean>((resolve, reject) => {
      this.storage.get('userInfo').then((user) => {
        resolve(!Boolean(user));
      }).catch(err => resolve(true));
    });
  }

}
