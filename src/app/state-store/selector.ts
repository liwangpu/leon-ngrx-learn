import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromState from './state';

export const selectStoreState = createFeatureSelector<fromState.IStoreState>(fromState.stateStoreKey);

export const selectScopeData = createSelector(
    selectStoreState,
    state => state.scope
);

export const selectScopeMessage = createSelector(
    selectStoreState,
    state => state.scope.info?.message
);