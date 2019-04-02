import React from 'react'
import Calculator from '../../components/Calculator'

const numbers = [
    { a: 5, b: 10 },
    { a: 7, b: 12 },
    { a: 3, b: 11 },
];

const Calculators = () => {
    return (
        numbers.map(el =>
            <Calculator
                a={el.a}
                b={el.b}
            />
        )
    )
}

export default Calculators