import React from 'react'
import Divide from './Divide'

const Multiply = (props) => {
    return (
        <div>
            <p>
                Ich iloczyn to: {props.a * props.b}
            </p>
            <Divide
                a = {props.a}
                b = {props.b}
            />
        </div>
    )
}

export default Multiply