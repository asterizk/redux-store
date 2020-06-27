import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza', complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data,
      };
    }
    case fromActions.REMOVE_TODO: {
      const data = state.data.filter( todo => { return todo.label !== action.payload.label } )  // IFF you use {}s on the right
                                                                                                // side of your arrow function you
                                                                                                // MUST use a 'return' statement within
                                                                                                // the {}s.
                                                                                                // In a more complex app, we'd typically
                                                                                                // be dealing with unique ids here
                                                                                                // rather than labels.
      return {
        ...state,
        data  // rebinding our new data object back to the state (replacing the data object within state)
      }
    }
  }

  return state;
}
