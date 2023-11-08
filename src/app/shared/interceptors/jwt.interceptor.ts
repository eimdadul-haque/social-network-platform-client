import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AccountService } from "src/app/accounts/services/account.services";
import { ENVIRONMENT } from "src/app/environtments/environtments";


export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private accountService: AccountService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.accountService.getCurrentUser;
        const apiUrl = req.url.startsWith(ENVIRONMENT.apiUrl);
        if (this.accountService.isLoggedIn && apiUrl) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            })
        }
        return next.handle(req);
    }
}