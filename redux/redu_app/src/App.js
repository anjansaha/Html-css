
import './App.css';
import {incNumber, decNumber } from "./action/index"
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const myState= useSelector(state=>state.ChangeNumber);
  const dip= useDispatch();
  return (
    <div className="App">
      <h1>React Core</h1>
      <div className="quintity">
          <button className="quintity_minus" onClick={()=>dip(decNumber())}>-</button>
          <input type="text" value={myState}/>
          <button className="quintity_plus"onClick={()=>dip(incNumber())} >+</button>
      </div>
    </div>
  );
}

export default App;
