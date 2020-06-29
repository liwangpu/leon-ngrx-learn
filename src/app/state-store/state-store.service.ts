import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromState from './state';
import * as fromSelector from './selector';
import * as fromAction from './action';

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

}
