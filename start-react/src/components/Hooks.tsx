import { KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'

interface User{
    id: number,
    username: string
}

type fibFunc = (n: number) => number
const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}
const myNum: number = 37;

const Hooks = () => {
    // const [count, setCount] = useState(0);
    // const [count, setCount] = useState<number>(0);
    // const [count, setCount] = useState<number | null>(null);
    // const [user, setUser] = useState<User | null>(null);
    // const [user, setUser] = useState<User[] | null>(null);
    // const [user, setUser] = useState<User[]>([]);
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState<User>({} as User); //lying to compiler when u do this!!!
    useEffect(() => {
        console.log('mounting');
    }, []);

    // const AddTwo = useCallback(() => setCounter((prev) => prev + 2), []);
    const AddTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCounter((prev) => prev + 2), []);

    const result = useMemo<number>(() => fib(myNum), []);

    return (
        <div>
            <h1>Hooks in react:</h1>
            <h1>{counter}</h1>
            <button onClick={AddTwo}>Add</button>
            <h2>fib is: {result}</h2>
        </div>
    )
}

export default Hooks
