import { ENVIRONMENT_INITIALIZER, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { IApplicationUser } from '../models/account.interface';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from 'src/app/environtments/environtments';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private currentUserSubject: BehaviorSubject<IApplicationUser>;
    constructor(private httpClient: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IApplicationUser>(
            JSON.parse(localStorage.getItem('currentUser') || '{}')
        );
    }

    login(model: IApplicationUser): Observable<IApplicationUser> {
        return this.httpClient
            .post<IApplicationUser>(`${ENVIRONMENT.apiUrl}`, model)
            .pipe(
                map((user: IApplicationUser) => {
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        this.setCurrentUser(user);
                    }
                    return user;
                })
            );
    }

    private setCurrentUser(user: IApplicationUser) {
        this.currentUserSubject.next(user);
    }

    public get getCurrentUser(): IApplicationUser {
        return this.currentUserSubject.value;
    }

    public get isLoggedIn(): boolean {
        return true;
    }
}
