import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total } = state;
  const { next } = state;
  const { operation } = state;

  const handleCalc = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <>
      <div className="calculator">
        <div className="resultsPanel">
          <span className="result">
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div className="buttons">
          <button onClick={handleCalc} type="button" className="btn1">AC</button>
          <button onClick={handleCalc} type="button" className="btn2">+/-</button>
          <button onClick={handleCalc} type="button" className="btn3">%</button>
          <button onClick={handleCalc} type="button" className="btn4 x">÷</button>
          <button onClick={handleCalc} type="button" className="btn5">7</button>
          <button onClick={handleCalc} type="button" className="btn6">8</button>
          <button onClick={handleCalc} type="button" className="btn7">9</button>
          <button onClick={handleCalc} type="button" className="btn8 x">x</button>
          <button onClick={handleCalc} type="button" className="btn9">4</button>
          <button onClick={handleCalc} type="button" className="btn0">5</button>
          <button onClick={handleCalc} type="button" className="btn11">6</button>
          <button onClick={handleCalc} type="button" className="btn12 x">-</button>
          <button onClick={handleCalc} type="button" className="btn13">1</button>
          <button onClick={handleCalc} type="button" className="btn14">2</button>
          <button onClick={handleCalc} type="button" className="btn15">3</button>
          <button onClick={handleCalc} type="button" className="btn16 x">+</button>
          <button onClick={handleCalc} type="button" className="btn17 double">0</button>
          <button onClick={handleCalc} type="button" className="btn18">.</button>
          <button onClick={handleCalc} type="button" className="btn19 x">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
