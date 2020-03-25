//Author: Peter DeLuce 2020
//JavaScript for the WebCalc App

import React, { Component } from "react";

const Button =(props) => {

    const buttonPressed = (e) => {
        const value = e.target.value;
        props.buttonPressed(value);
};
    return(
        <div className="calculator">
            <h3>Basic Calculator</h3>
            <input type="text"
            className="calculator-screen"
            value = {props.valueInput}
            disabled
            />

            <div className="calculator-keys">
                <button onClick={buttonPressed} value="+">+</button>
                <button onClick={buttonPressed} value="-">-</button>
                <button onClick={buttonPressed} value="*">&times;</button>
                <button onClick={buttonPressed} value="/">&divide;</button>

                <button onClick={buttonPressed} value="7">7</button>
                <button onClick={buttonPressed} value="8">8</button>
                <button onClick={buttonPressed} value="9">9</button>
                <button onClick={buttonPressed} value="4">4</button>
                <button onClick={buttonPressed} value="5">5</button>
                <button onClick={buttonPressed} value="6">6</button>       
                <button onClick={buttonPressed} value="1">1</button>
                <button onClick={buttonPressed} value="2">2</button>
                <button onClick={buttonPressed} value="3">3</button>
                <button onClick={buttonPressed} value="0">0</button>

                <button onClick={buttonPressed} value=".">.</button>
                <button onClick={buttonPressed} value="all-clear" className="all-clear">AC</button>

                <button onClick={buttonPressed} className="equal-sign" value="=">=</button>
            </div>
        </div>
    )
}

export default Button;
