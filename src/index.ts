import { Users } from './services/users';
import { Logger } from './services/logger';

import type { User } from './types';
import {createIoCContainer} from "./ioc";

const ioc = createIoCContainer();

const config = (window as any).__CONFIG__;
ioc.register('config', config.api);

const renderUsers = async () => {
  const usersService: Users = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  delete (window as any).__CONFIG__;

  renderUsers();
};

window.onload = (_: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
