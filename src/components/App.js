import React, {useReducer} from 'react';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {reducer, initialState} from "../reducers/index"
import { ADD_MEMORY ,CLEAR_DISPLAY, ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';
import './App.css';






function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const Calculate = (num)=>{
    return {type: 'APPLY_NUMBER', payload: num }
  }

  const opperation = (operand) =>{
    return({type: 'CHANGE_OPERATION', payload: operand})
  }

  console.log(state)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton  value={"M+"} onClick={()=> dispatch( {type: "ADD_MEMORY"})}/>
              <CalcButton  value={"MR"} onClick={() => dispatch(Calculate(state.memory))}/>
              <CalcButton  value={"MC"} onClick={() => dispatch({ type: "CLEAR_MEMORY" })}/>
            </div>

            <div className="row">
              <CalcButton  value={1} onClick={() => dispatch(Calculate(1))} />
              <CalcButton  value={2} onClick={() => dispatch(Calculate(2))}/>
              <CalcButton  value={3} onClick={() => dispatch(Calculate(3))}/>
            </div>

            <div className="row">
              <CalcButton  value={4} onClick={() => dispatch(Calculate(4))}/>
              <CalcButton  value={5} onClick={() => dispatch(Calculate(5))}/>
              <CalcButton  value={6} onClick={() => dispatch(Calculate(6))}/>
            </div>

            <div className="row">
              <CalcButton  value={7} onClick={() => dispatch(Calculate(7))}/>
              <CalcButton  value={8} onClick={() => dispatch(Calculate(8))}/>
              <CalcButton  value={9} onClick={() => dispatch(Calculate(9))}/>
            </div>

            <div className="row">
              <CalcButton  value={"+"} onClick={()=> dispatch(opperation("+"))}/>
              <CalcButton  value={"*"} onClick={()=> dispatch(opperation("*"))}/>
              <CalcButton  value={"-"} onClick={()=> dispatch(opperation("-"))}/>
            </div>

            <div className="row ce_button">
              <CalcButton   value={"CE"} onClick={() => dispatch({ type: "CLEAR_DISPLAY" })}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
