import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined;

  get isLogged(): boolean {

    return !!this.user
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
  try{
    const loaclStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
    this.user = JSON.parse(loaclStorageUser);
  } catch(err) {
    this.user = undefined;
  }

   }

  login(email: string, password: string): void {
    this.user = {
      email: email,
      firstName: email,
      lastName: 'Panayotov'
    }

    this.localStorage.setItem('<USER>', JSON.stringify(this.user));

  }

  logout(): void {
    this.user = undefined;

  }
}
