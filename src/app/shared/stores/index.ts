// Inside the root 'index.ts' file of our store, eg - store/index.ts

import { TodosState } from '../../modules/todos/store';

// Still allow other modules to take what they need, eg action & selectors
export * from '../../modules/todos/store';

// rolls up our states into one const
export const states = [TodosState];
