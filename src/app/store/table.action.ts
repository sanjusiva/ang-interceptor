import { Action } from "@ngrx/store";
import { TableModal } from "./table.modal";

export const ADD='Add Table'
export const DEL='Del Table'

export class AddTable implements Action{
    readonly type = ADD;

    constructor(public payload: TableModal) {console.log('action: ',payload)}
}
export class DelTable implements Action{
    readonly type = DEL;

    constructor(public payload: TableModal) {}
}

export type Act = AddTable| DelTable