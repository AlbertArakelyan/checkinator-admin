import { request } from '@/utils';

class UserService {
  static getUsers(skip = 0) {
    return request('GET', `user?skip=${skip}`);
  }
}

export default UserService;
