import { ActionCreator, ActionType, combineReducers, createReducer, Creator, on, ReducerTypes } from '@ngrx/store';
import * as fromAction from './action';
import * as fromState from './state';
 
export const initialState: fromState.IDataCenter = {

}

const ons: ReducerTypes<IUserState, readonly ActionCreator<string, Creator<any[], object>>[]>[] = [
    on(fromAction.setData, (state, { data }) => {
        return state
    })
];

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
    on(fromAction.setData, (state: IUserState,{ data }) => {
        return { ...state, ...data };
    })
);


export const stateReducer = combineReducers({
    user: userReducer
})