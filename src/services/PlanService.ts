import { request } from '@/utils';

import { IResponseData } from '@/services/types';

class PlanService {
  static getPlans<T>() {
    return request<IResponseData<T>>('GET', 'plan');
  }
}

export default PlanService;
