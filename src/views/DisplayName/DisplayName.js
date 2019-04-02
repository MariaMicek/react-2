import React from 'react'

const DisplayName = (props) => {
    return (
        <div>
            <p>
                Imię: {props.match.params.name}
            </p>
            <p>
                Nazwisko: {props.match.params.surname}
            </p>
        </div>
    )
}

export default DisplayName