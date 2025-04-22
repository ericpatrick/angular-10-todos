import { FilterEnum } from './../../../models/filter.enum';
import { FilterOption } from '../models/filter-option.model';

export const filterOptions: FilterOption[] = [
  {
    label: 'All',
    value: FilterEnum.ALL
  },
  {
    label: 'Completed',
    value: FilterEnum.COMPLETED
  },
  {
    label: 'Incomplete',
    value: FilterEnum.INCOMPLETED
  }
]