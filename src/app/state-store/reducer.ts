import { createReducer, on } from '@ngrx/store';
import * as fromAction from './action';
import * as fromState from './state';

export const stateReducer = createReducer({ scope: { name: 'robot', age: 18, info: { message: '梦开始的地方' } } },
    on(fromAction.setScopeData, (state: fromState.IStoreState, { scope }) => {
        return { ...state, scope: { ...state.scope, ...scope } };
    })
);