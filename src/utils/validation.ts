import { required } from '@/constants';

import { IComboboxPlanItem } from '@/types';

export const planRules = {
  name: [
    (value: string) => !!value || required(value),
  ],
  price: [
    (value: number) => !!value || required(value),
  ],
  planItems: [
    (value: IComboboxPlanItem[]) => !!value?.length || required(value),
  ]
};
