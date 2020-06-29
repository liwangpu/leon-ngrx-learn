import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';
import * as fromState from './state';
import * as fromSelector from './selector';
import * as fromAction from './action';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Injectable()
export class StateStoreService {

    public constructor(
        private store: Store<fromState.IStoreState>
    ) { }

    public get scope$(): Observable<{ [key: string]: any }> {
        return this.store.select(fromSelector.selectScopeData);
    }

    public get scopeMessage$(): Observable<string> {
        return this.store.select(fromSelector.selectScopeMessage);
    }

    public setScope(scope: {}): void {
        this.store.dispatch(fromAction.setScopeData({ scope }));
    }

    public getDynamicScope(scope: { [key: string]: any }): Observable<any> {
        let dySelector = createSelector(
            fromSelector.selectStoreState,
            state => {
                let data = {};
                let keys = Object.keys(scope);
                keys.forEach(k => {
                    data[k] = _.get(state.scope, scope[k]);
                });
                console.log(1,data);
                return JSON.stringify(data);
                // console.log(1);
                // return state.scope.info?.message
            }
        );
        return this.store.select(dySelector).pipe(map((str: string) => JSON.parse(str)));
    }

}
