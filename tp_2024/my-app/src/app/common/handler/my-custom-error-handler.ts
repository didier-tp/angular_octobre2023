import { ErrorHandler } from '@angular/core';

export class MyCustomErrorHandler implements ErrorHandler {
  handleError(error:any) {
    // Do what you want here, but throw it so that it's visible on the console!
    console.log("** " + error + " **");
    //useful use case : send error to a remote REST API
    if(error instanceof Error) throw error;
    else throw new Error(error);
  }
}
/*
A enregistrer dans @NgModule via 

providers: [{
  provide: ErrorHandler,
  useClass: MyCustomErrorHandler
}]

*/