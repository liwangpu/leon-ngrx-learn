import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state';
import * as fromReducer from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromState.dataCenterStateKey, fromReducer.stateReducer)
  ]
})
export class DataCenterModule { }
