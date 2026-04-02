import './App.scss'
import Input from "./component/input/input.tsx"
import InputRP from './component/inputReadyPassword/inputRP.tsx'
import Range from "./component/range/range.tsx"
import LevelStrength from './component/level-strength/main.tsx'
import { useStore } from './store.tsx'

function App() {

  const {funtPassword, funcClear} = useStore()

  return (
    <div className="widget">
      <p className="text-name">Password Generator</p>

      <div className="first">
        <InputRP />
      </div>
      
      
      <div className="second">
        <Range />
        <Input />
        <LevelStrength />
        <div className="btn">
          <button className="button" onClick={()=>{funcClear(); funtPassword()}}>GENERATE</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
