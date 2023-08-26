import { request } from '@/utils';

import { IResponseData } from '@/services/types';

class PlanService {
  static getPlans<T>() {
    return request<IResponseData<T>>('GET', 'plan');
  }

  static createPlan<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'plan', data);
  }

  static editPlan<T, D>(id: string, data: D) {
    return request<IResponseData<T>>('PUT', `plan/${id}`, data);
  }

  static deletePlan<T, D>(id: D) {
    return request<IResponseData<T>>('DELETE', `plan/${id}`);
  }
}

export default PlanService;
