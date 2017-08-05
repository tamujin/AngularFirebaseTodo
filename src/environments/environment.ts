// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyD-4D2P9zSoju-V84SGpVmmGUj-_M0bBaI",
    authDomain: "angular-firebase-todo-f6fdf.firebaseapp.com",
    databaseURL: "https://angular-firebase-todo-f6fdf.firebaseio.com",
    projectId: "angular-firebase-todo-f6fdf",
    storageBucket: "angular-firebase-todo-f6fdf.appspot.com",
    messagingSenderId: "463501748869"
  }
};
