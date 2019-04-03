import React from 'react'
import Paper from '@material-ui/core/Paper';

const PaperRefined = (props) => {
    return (
        <div>
            <Paper
                style={{
                    margin: '20px',
                    padding: '20px',
                }}
            >
            {
                props.doNotDisplayChildren ?        //conditional rendering
                null
                :
                props.children
            }
            </Paper>
        </div>
    )
}

export default PaperRefined