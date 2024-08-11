import { CanActivateFn } from '@angular/router';

export const privateGuard = (): CanActivateFn => {
  console.log('privateGuard');
  return () => {
    return true;
  };
};

export const publicGuard = (): CanActivateFn => {
  console.log('publicGuard');
  return () => {
    return true;
  };
};
