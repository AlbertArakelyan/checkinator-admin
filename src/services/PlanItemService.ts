import { request } from '@/utils';

import { IResponseData } from '@/services/types';

class PlanItemService {
  static getPlanItems<T>() {
    return request<IResponseData<T>>('GET', 'plan-item');
  }
  static createPlanItem<T, D>(data: D) {
    return request<IResponseData<T>>('POST', 'plan-item', data);
  }
  static deletePlanItem<T, D>(id: D) {
    return request<IResponseData<T>>('DELETE', `plan-item/${id}`);
  }
}

export default PlanItemService;
