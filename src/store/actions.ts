// Action constants
export const ADD_TODO = '[Todo] Add Todo'; // '[Todo]' here is kind of a namespace for our actions
export const REMOVE_TODO = '[Todo] Remove Todo';

// Action Creators
export class AddTodo {
    readonly type = ADD_TODO;  // We do this because we KNOW the type is always going to be this for any new todo item

    constructor(private payload: any){};  // Include whatever the payload is.
}

// Action Creators
export class RemoveTodo {
    readonly type = REMOVE_TODO;  // We do this because we KNOW the type is always going to be this for any new todo item

    constructor(private payload: any){};  // Include whatever the payload is. In a real app
                                          // we wouldn't use the 'any' type here and would
                                          // specify a real type, probably an interface
}