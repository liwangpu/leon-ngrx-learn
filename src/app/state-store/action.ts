import { createAction, props } from '@ngrx/store';

export const setScopeData = createAction('[my store] set scope data', props<{ scope: { [key: string]: any } }>());