import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.authService.isLoggedIn
      .subscribe((isLoggedIn: boolean) => {
        if (!isLoggedIn){
        	console.log("---- usrer not logged in ----- ");
          this.router.navigate(['/auth']);
          return false;
        }
        return true;
      });
  }
}
