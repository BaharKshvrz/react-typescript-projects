import { ReactNode, useState } from 'react'

type ChildrenType = {
    children: (num: number) => ReactNode;
}

const ModernCounter = ({children} : ChildrenType) => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);
    
  return (
      <>
          <h1>UserReducer:</h1>
          <h1>{children(counter)}</h1>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
    </>
  )
}

export default ModernCounter
