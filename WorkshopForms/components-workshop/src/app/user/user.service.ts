import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {

    return !!this.user
  }

  constructor(
    private http: HttpClient
  ) {}

  login(data: {email: string, password: string}){
    return this.http.post<IUser>(`${apiURL}/login`, data, {withCredentials: true}).pipe(
      tap((user) => this.user = user)
    )
  }

  register(data: { username: string; email: string; tel: string, password: string }) {
    return this.http.post<IUser>(`${apiURL}/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo(){
    return this.http.get<IUser>(`${apiURL}/users/profile`, { withCredentials: true}).pipe(
      tap((user)=> this.user = user)
    )
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/logout`, {}, {withCredentials: true}).pipe(
      tap(()=> this.user = null)
    )
  }

  updateProfile(data: {username: string; email: string; tel: string}){
    return this.http.put<IUser>(`${apiURL}/users/profile`, data, {withCredentials: true}).pipe(
      tap((user)=> this.user = user)
    )
  }

}
