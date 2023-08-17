import { request } from '@/utils';

class UserService {
  static getUsers() {
    return request('GET', 'user');
  }
}

export default UserService;
