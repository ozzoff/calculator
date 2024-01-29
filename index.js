import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import {create,all} from "mathjs"

let math=create(all)

function Main() {
  let[result,setresult]=React.useState('')
  let[input,setinput]=React.useState('')

  function ClickToCalculate(value){
    if(value==="C"){
      setresult("")
      setinput("")
    }
    else if (value==="="){
      try{
        let result=math.evaluate(input)
        setresult(result.toString())
      }catch (error){
        setresult("error")

      }
      
    }

    else{
      setinput(prev=>prev+value)
    }

  }
  
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" placeholder={input}  readOnly />
        <span className="result">{result}</span>
      </div>
      <div className="buttons">
        <button onClick={()=>ClickToCalculate("7")} >7</button>
        <button onClick={()=>ClickToCalculate("8")} >8</button>
        <button onClick={()=>ClickToCalculate("9")} >9</button>
        <button onClick={()=>ClickToCalculate("/")} >/</button>
        <button onClick={()=>ClickToCalculate("4")} >4</button>
        <button onClick={()=>ClickToCalculate("5")} >5</button>
        <button onClick={()=>ClickToCalculate("6")} >6</button>
        <button onClick={()=>ClickToCalculate("*")} >*</button>
        <button onClick={()=>ClickToCalculate("1")} >1</button>
        <button onClick={()=>ClickToCalculate("2")} >2</button>
        <button onClick={()=>ClickToCalculate("3")} >3</button>
        <button onClick={()=>ClickToCalculate("-")} >-</button>
        <button onClick={()=>ClickToCalculate("0")} >0</button>
        <button onClick={()=>ClickToCalculate(".")} >.</button>
        <button onClick={()=>ClickToCalculate("=")} >=</button>
        <button onClick={()=>ClickToCalculate("+")} >+</button>
        <button onClick={()=>ClickToCalculate("C")} >C</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
