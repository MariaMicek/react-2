import React from 'react'
import Multiply from './Multiply'

const Add = (props) => {
    return (
        <div>
            <p>
                Ich suma: {props.a + props.b}
            </p>
            <Multiply
                a = {props.a}
                b = {props.b}
            />
        </div>
    )
}

export default Add