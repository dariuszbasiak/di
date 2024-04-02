import { IHTTP } from './http';
import type { ApiConfig, User } from '../types';

export interface IUsers {
  getUsers: () => User[]
}
export class Users implements IUsers{
  http: IHTTP;
  apiConfig: ApiConfig;

  static $inject = ['config', 'http']

  constructor(apiConfig: ApiConfig, http: IHTTP) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
