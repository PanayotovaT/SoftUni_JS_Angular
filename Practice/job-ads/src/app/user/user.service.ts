import { Injectable } from '@angular/core';
import { IUser } from '../services/interfaces/user';

@Injectable()
export class UserService {

  user: IUser | undefined;

  constructor() { }
}
