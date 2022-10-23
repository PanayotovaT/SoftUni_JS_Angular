import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined;

  get isLogged(): boolean {

    return !!this.user
  }

  constructor(
    // @Inject(LocalStorage) private localStorage: Window['localStorage']
    private http: HttpClient
    ) {
  // try{
  //   const loaclStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
  //   this.user = JSON.parse(loaclStorageUser);
  // } catch(err) {
  //   this.user = undefined;
  // }

   }

  login(email: string, password: string): void {
    // this.user = {
    //   email: email,
    //   firstName: email,
    //   lastName: 'Panayotov'
    // }

    // this.localStorage.setItem('<USER>', JSON.stringify(this.user));

  }

  register(data: { username: string; email: string; tel: string, password: string}) {
    return this.http.post<IUser>(`${apiURL}/register`, data, { withCredentials: true}).pipe(
      tap((user)=> this.user = user)
    );
  }

  logout(): void {
    // this.user = undefined;
    // this.localStorage.removeItem('<USER>');

  }
}
