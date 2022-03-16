import React, { Component } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 5 };
  }

  render() {
    const { val } = this.state;
    return (
      <>
        <div className="resultsPanel">
          <span className="result">{ val }</span>
        </div>
        <div className="buttons">
          <button type="button" className="button-1 top-buttons">AC</button>
          <button type="button" className="button-2 top-buttons">+/-</button>
          <button type="button" className="button-3 top-buttons">%</button>
          <button type="button" className="button-4 x right-buttons">÷</button>
          <button type="button" className="button-5 central-buttons">7</button>
          <button type="button" className="button-6 central-buttons">8</button>
          <button type="button" className="button-7 central-buttons">9</button>
          <button type="button" className="button-8 x right-buttons">x</button>
          <button type="button" className="button-9 central-buttons">4</button>
          <button type="button" className="button-10 central-buttons">5</button>
          <button type="button" className="button-11 central-buttons">6</button>
          <button type="button" className="button-12 x right-buttons">-</button>
          <button type="button" className="button-13 central-buttons">1</button>
          <button type="button" className="button-14 central-buttons">2</button>
          <button type="button" className="button-15 central-buttons">3</button>
          <button type="button" className="button-16 x right-buttons">+</button>
          <button type="button" className="button-17 central-buttons">0</button>
          <button type="button" className="button-18 central-buttons">.</button>
          <button type="button" className="button-19 x right-buttons">=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
