import { request } from '@/utils';

import { IResponseData } from '@/services/types';

class PlanItemService {
  static getPlanItems<T>() {
    return request<IResponseData<T>>('GET', 'plan-item');
  }
}

export default PlanItemService;
