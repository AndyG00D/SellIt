// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  apiBase: 'http://light-it-04.tk/api',
  googleToken: '837694048230-keo53o03s8od9ee39boib7o6prp18fs5.apps.googleusercontent.com',
  maxFileSize: 507200,
  imgType: ['image/jpeg', 'image/jpg', 'image/png']
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
