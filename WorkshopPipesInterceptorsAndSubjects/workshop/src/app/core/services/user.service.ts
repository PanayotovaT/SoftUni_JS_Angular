import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  tap } from 'rxjs';
import { IUser } from '../../shared/interfaces';


@Injectable()
export class UserService {
  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {

    return !!this.user
  }

  constructor(
    private http: HttpClient
  ) {}

  login(data: {email: string, password: string}){
    return this.http.post<IUser>(`/api/login`, data).pipe(
      tap((user) => this.user = user)
    )
  }

  register(data: { username: string; email: string; tel: string, password: string }) {
    return this.http.post<IUser>(`/api/register`, data).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo(){
    return this.http.get<IUser>(`/api/users/profile`).pipe(
      tap((user)=> this.user = user)
      //written for test purposes
      // tap((user)=>{
      //   (this as any).userr.test = user
      // })

    )
  }

  logout() {
    return this.http.post<IUser>(`/api/logout`, {}).pipe(
      tap(()=> this.user = null)
    )
  }

  updateProfile(data: {username: string; email: string; tel: string}){
    return this.http.put<IUser>(`/api/users/profile`, data).pipe(
      tap((user)=> this.user = user)
    )
  }

}
