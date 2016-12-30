import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'ADD';
export const DECREMENT = 'REMOVE';
export const RESET = 'RESET';

export const bountyReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}