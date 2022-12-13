// Define your router selectors in '/store/router/router.selectors.ts
import {
  RouterState,
  RouterStateModel as RouterStateOuterModel,
} from '@ngxs/router-plugin';
import { Selector } from '@ngxs/store';

import { RouterStateModel } from './router.model';

export class RouterSelectors {
  // base selector
  @Selector([RouterState])
  static data({ state }: RouterStateOuterModel<RouterStateModel>) {
    return state?.data;
  }

  @Selector([RouterState])
  static params({ state }: RouterStateOuterModel<RouterStateModel>) {
    return state?.params;
  }

  @Selector([RouterState])
  static queryParams({ state }: RouterStateOuterModel<RouterStateModel>) {
    return state?.queryParams;
  }

  @Selector([RouterState])
  static url({ state }: RouterStateOuterModel<RouterStateModel>) {
    return state?.url;
  }
}
