import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function connectRouter(router = inject(Router)): void {
  router.initialNavigation();
  const url = `${location.hash.substring(1)}${location.search}`;
  router.navigateByUrl(url);

  globalThis.addEventListener('MICRO_FRONTEND_URL_EVENT', () => {
    const url = `${location.hash.substring(1)}${location.search}`;
    router.navigateByUrl(url);
  });
}