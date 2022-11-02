import { createAction, props } from '@ngrx/store';

const namespace = '[GLOBAL]';

export const incrementCounter = createAction(
`${namespace} increment counter`,
);

export const setValue = createAction(
  `${namespace} set value`,
  props<{ value: string }>()
);
