// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /**
   * Add "," and create a firebase "Link"
   */
  firebase: {
    apiKey: 'AIzaSyAqZ96H6nfocwV4z1R95FhwgG7AYMA-fho',
    authDomain: 'bfhionicschlaf.firebaseapp.com',
    databaseURL: 'https://bfhionicschlaf.firebaseio.com',
    projectId: 'bfhionicschlaf',
    storageBucket: 'bfhionicschlaf.appspot.com',
    messagingSenderId: '1029591900715',
    appId: '1:1029591900715:web:885d0d05e706229449806e',
    measurementId: 'G-3F2QRWSZRS'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
