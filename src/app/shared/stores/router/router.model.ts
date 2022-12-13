// Define a router model in /store/router/router-state.model.ts

import { Params } from '@angular/router';

export interface RouterStateModel {
  url: string;
  params: Params;
  queryParams: Params;
  data: any;
}
