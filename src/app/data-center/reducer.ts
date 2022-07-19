import { ActionType, combineReducers, createReducer, on } from '@ngrx/store';
import * as fromAction from './action';
import * as fromState from './state';

export const initialState: fromState.IDataCenter = {

}

// export const stateReducer = createReducer(initialState,
//     on(fromAction.setData, (state: fromState.IDataCenter, { data }) => {
//         return { ...state, data };
//     })
// );

// on<fromState.IDataCenter, ActionType<any>>(fromAction.setData, (state: fromState.IDataCenter, { data }) => {
//     return { ...state, data };
// })

interface IUserState {
    name?: string;
    age?: number;
};

const userState: IUserState = {};

const userReducer = createReducer(userState,
    on(fromAction.setData, (state: IUserState, { data }) => {
        return { ...state, ...data };
    })
);


export const stateReducer = combineReducers({
    user: userReducer
})