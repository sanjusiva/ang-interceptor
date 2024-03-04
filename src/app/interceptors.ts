import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/authInterceptor';

export const interceptorProviders = 
   [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];