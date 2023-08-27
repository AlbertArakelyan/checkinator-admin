import { required } from '@/constants';

import { IComboboxPlanItem } from '@/types';

export const planRules = {
  name: [
    (value: string) => !!value || required('Name'),
  ],
  price: [
    (value: number) => !!value || required('Price'),
  ],
  planItems: [
    (value: IComboboxPlanItem[]) => !!value?.length || required('Plan Items'),
  ],
  color: [
    (value: string) => !!value || required('Color'),
  ],
};
