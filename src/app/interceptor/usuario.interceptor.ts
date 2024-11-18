import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenServicesService } from '../services/ExtServices/token-services.service';

export const usuarioInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenServicesService);
  const isApiUrl = req.url.includes("api/v1/auth");
  if (!tokenService.isLogged() || isApiUrl) {
  return next(req);
  }
  const token = tokenService.getToken();
  const authReq = req.clone({
  setHeaders: {
  Authorization: `Bearer ${token}`
  }
  });
  return next(authReq);
};
