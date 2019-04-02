import React from 'react'
import Add from './Add'
import Multiply from './Multiply'
import Divide from './Divide'
import Substract from "./Substract";

const operations = [Add, Multiply, Divide, Substract]

const Calculator = (props) => {
    return (
        <div>
            <h2>
                Liczby to: {props.a} i {props.b}
            </h2>

            {
                operations.map(
                    Component =>
                        <Component
                            a={props.a}
                            b={props.b}
                        />
                )
            }
        </div>
    )
}

export default Calculator