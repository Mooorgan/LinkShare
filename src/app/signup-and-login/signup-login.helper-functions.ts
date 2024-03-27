// import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
// import { Observable } from 'rxjs';

// export const isLoginResolver: ResolveFn<boolean> = (
//   route: ActivatedRouteSnapshot
// ): Observable<boolean> | Promise<boolean> | boolean => {
//   console.log(route);
//   if (route.url.length === 0) {
//     return true;
//   }
//   const { path } = route.url[0];
//   if (path === 'signup') {
//     return false;
//   }
//   throw new Error('Error in route.url[0].path of isLoginResolver');
// };
