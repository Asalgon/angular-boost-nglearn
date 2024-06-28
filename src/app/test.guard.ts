import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormService } from './services/form.service';

export const testGuard: CanActivateFn = (route, state) => {
  const form = inject(FormService);
  const router = inject(Router);

  if(form.isDone()) {
    return true;
  } else {
    router.navigate(['/test']);
    return false;
  }
}
