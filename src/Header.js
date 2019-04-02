import React from 'react'
import Name from './Name'

const Header = (props) => {
    return (
        <div>
            <h1> Nazywam się </h1>
            <Name 
                name = {props.firstName + ' ' + props.lastName}
            />
            <Name 
                name = {'Ala'}
            />
        </div>
    )
}

export default Header