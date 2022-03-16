import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleCalc = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="resultsPanel">
          <span className="result">
            {total}
            {operation}
            {next}
          </span>
        </div>
        <div className="buttons">
          <button onClick={this.handleCalc} type="button" className="btn1">AC</button>
          <button onClick={this.handleCalc} type="button" className="btn2">+/-</button>
          <button onClick={this.handleCalc} type="button" className="btn3">%</button>
          <button onClick={this.handleCalc} type="button" className="btn4 x">÷</button>
          <button onClick={this.handleCalc} type="button" className="btn5">7</button>
          <button onClick={this.handleCalc} type="button" className="btn6">8</button>
          <button onClick={this.handleCalc} type="button" className="btn7">9</button>
          <button onClick={this.handleCalc} type="button" className="btn8 x">x</button>
          <button onClick={this.handleCalc} type="button" className="btn9">4</button>
          <button onClick={this.handleCalc} type="button" className="btn0">5</button>
          <button onClick={this.handleCalc} type="button" className="btn11">6</button>
          <button onClick={this.handleCalc} type="button" className="btn12 x">-</button>
          <button onClick={this.handleCalc} type="button" className="btn13">1</button>
          <button onClick={this.handleCalc} type="button" className="btn14">2</button>
          <button onClick={this.handleCalc} type="button" className="btn15">3</button>
          <button onClick={this.handleCalc} type="button" className="btn16 x">+</button>
          <button onClick={this.handleCalc} type="button" className="btn17 double">0</button>
          <button onClick={this.handleCalc} type="button" className="btn18">.</button>
          <button onClick={this.handleCalc} type="button" className="btn19 x">=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
