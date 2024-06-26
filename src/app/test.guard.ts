import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormService } from './services/form.service';

export const testGuard: CanActivateFn = (route, state) => {
  const form = inject(FormService);
  const router = inject(Router);

  /*if(form.isDone()) {
      router.navigateByUrl('/results')
      return true
  } else {
    router.navigateByUrl('/test')
    return false
  }*/
 return true

};
