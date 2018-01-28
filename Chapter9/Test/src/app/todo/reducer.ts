import { Action } from '@ngrx/store';
import { ADD_TODO } from './constants';
import { ActionPayload } from '../interfaces';

const initialState = ['Yoda'];

export function todosReducer(state = initialState, action: ActionPayload<string>) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
