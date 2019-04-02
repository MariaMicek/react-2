import React from 'react'
import Add from './Add'

const Calculator = (props) => {
    return(
        <div>
            <p>
                Liczby to: {props.a} i {props.b}
            </p>
            <Add 
                a = {props.a}
                b = {props.b}
            />
        </div>
    )
}

export default Calculator