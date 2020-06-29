import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateStoreService } from './state-store.service';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state';
import * as fromReducer from './reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(fromState.stateStoreKey, fromReducer.stateReducer)
    ],
    providers: [
        StateStoreService
    ]
})
export class StateStoreModule { }
