import { useState } from "react";

export default function Calculator() {
    const [operation, setOperation] = useState('');
    const [operator, setOperator] = useState('');

    function performCalculation() {
        // take the string reactive variable
        const myOperation = operation;

        // split the string into individual components
        const operands = myOperation.split(operator);
        const firstNumber = parseInt(operands[0]);
        const secondNumber = parseInt(operands[1]);

        // perform the calculation using if or switch
        if(operator === "+") {
            const results = firstNumber + secondNumber;
            setOperation(results.toString());
        } else
        if(operator === "-") {
            const results = firstNumber - secondNumber;
            setOperation(results.toString());
        } else
        if(operator === "*") {
            const results = firstNumber * secondNumber;
            setOperation(results.toString());
        } else
        if(operator === "/") {
            const results = firstNumber / secondNumber;
            setOperation(results.toString());
        } 
    

        // give the result back to the 'operation' reactive variable
    }


    return(
        <div className="flex justify-center p-2 h-screen">
            <div className="w-[35%] h-fit rounded shadow-md p-4">
                <div className="flex flex-col">
                    <label htmlFor="output-screen">Output Screen</label>
                    <input type="text" name="output-screen" className="input-screen" disabled value={operation} />
                </div>
                <div className="h-fit grid grid-cols-3 gap-2 my-2">
                    <button className="num-button" onClick={() => {setOperation(operation + 0)}}>0</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 1)}}>1</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 2)}}>2</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 3)}}>3</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 4)}}>4</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 5)}}>5</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 6)}}>6</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 7)}}>7</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 8)}}>8</button>
                    <button className="num-button" onClick={() => {setOperation(operation + 9)}}>9</button>
                    <button className="num-button" onClick={() => {
                        setOperation(operation + "+");
                        setOperator(operator + "+");
                    }}>+</button>
                    <button className="num-button" onClick={() => {
                        setOperation(operation + "-")
                        setOperator(operator + "-");
                    }}>-</button>
                    <button className="num-button" onClick={() => {
                        setOperation(operation + "*")
                        setOperator(operator + "*");
                    }}>*</button>
                    <button className="num-button" onClick={() => {
                        setOperation(operation + "/")
                        setOperator(operator + "/");
                    }}>/</button>
                    <button 
                        className="bg-red-400 active:bg-orange-600/50  p-2 rounded-lg text-xl"
                        onClick={() => {performCalculation()}}>=</button>
                    <button className="num-button" onClick={() => {setOperation(operation.slice(0, -1))}}>DEL</button>
                    <button 
                        className="bg-red-400 active:bg-orange-600/50  p-2 rounded-lg text-xl col-span-2"
                        onClick={() => {setOperation('')}}>CLS</button>
                </div>
            </div>
        </div>
    )
  }
  