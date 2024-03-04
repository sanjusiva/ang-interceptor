import * as TableActions from '../store/table.action';
import { TableModal } from './table.modal';

const initialState: TableModal = {
    product: 'Pencil',
    price: 15
}

export function Reducer(state:TableModal[]=[initialState],action:TableActions.Act){
    console.log("act: ",action)
    switch(action.type) {
        case TableActions.ADD:
            return [...state, action.payload];
        case TableActions.DEL:
            return [...state, action.payload];
        default:
            return state;
    }
}