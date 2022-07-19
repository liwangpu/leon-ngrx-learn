import { createAction, props } from '@ngrx/store';

export const setData = createAction('[data center] set data', props<{ data: { [key: string]: any } }>());