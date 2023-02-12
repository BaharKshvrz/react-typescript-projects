import { ChangeEvent, ReactNode, useReducer, useState } from 'react'

type ChildrenType = {
    children: (num: number) => ReactNode;
}

const initState = { count: 0, text: '' };
const enum REDUCE_ACTION_TYPE {
    INCREMETN,
    DECREMENT,
    NEW_INPUT
}
type ActionReducer = {
    type: REDUCE_ACTION_TYPE,
    payload?: string,
}

const reducer = (state: typeof initState, action: ActionReducer): typeof initState => {
    switch (action.type) {
        case REDUCE_ACTION_TYPE.INCREMETN:
            return { ...state, count: state.count + 1 }
        case REDUCE_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCE_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
  }
}

const HookReducer = ({children} : ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = () => dispatch({ type: REDUCE_ACTION_TYPE.INCREMETN });
  const decrement = () => dispatch({ type: REDUCE_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
     dispatch({
          type: REDUCE_ACTION_TYPE.NEW_INPUT,
           payload: e.target.value,
      });
     }
  return (
      <>
          <h1>UserReducer:</h1>
          <h1>{children(state.count)}</h1>
          <div>
             <button onClick={increment}>+</button>
             <button onClick={decrement}>-</button>
          </div>
          <input type="text" onChange={handleTextInput} />
          <h3>{state.text}</h3>
    </>
  )
}

export default HookReducer
