import { useState } from "react"
import Counter from "./components/Counter";
import Heading from "./components/Heading"
import ModernCounter from "./components/ModernCounter";
import Hooks from "./components/Hooks";
import List from "./components/List";
import Section from "./components/Section"
import HookReducer from "./components/HookReducer";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      {/* <Heading title="first react with typescript" />
      <Section>This is the first react project with typescript</Section>
      <Counter setCount={setCount} >{count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="bold"> {item} </span>}
      />
      <Hooks /> */}
      {/* <ModernCounter>{(num: number) => <>Current counter is: {num}</>}</ModernCounter> */}
      <HookReducer>{(num: number) => <>Current counter in useReducer is: {num}</>}</HookReducer>
    </>
  )
}

export default App
