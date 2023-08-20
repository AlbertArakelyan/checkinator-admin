import { request } from '@/utils';

import { IResponsePaginatedData } from '@/services/types';

class UserService {
  static getUsers<T>(skip = 0) {
    return request<IResponsePaginatedData<T>>('GET', `user?skip=${skip}`);
  }
}

export default UserService;
