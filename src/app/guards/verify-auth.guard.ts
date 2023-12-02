import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { tap } from 'rxjs';

export const verifyAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) 
  const router = inject( Router )
  return authService.verifyToken().pipe(
    tap( esAccesible => {
      if ( !esAccesible ) {
        router.navigateByUrl('/login')
      }
    })
  )
};


