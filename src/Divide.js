import React from 'react'
import Substract from "./Substract";

const Divide = (props) => {
    return (
        <div>
            <p>
                Ich iloraz to: {props.a / props.b}
            </p>
            <Substract
                a = {props.a}
                b = {props.b}
            />
        </div>
    )
}

export default Divide