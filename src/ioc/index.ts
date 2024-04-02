import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();

  ioc.registerClass('logger', Logger);
  ioc.registerClass('users', Users);
  ioc.registerClass('http', HTTP)
  ioc.register('config', {
    "path": "/api",
    "resources": {
      "users": "/users"
    }
  });

  return ioc;
};
