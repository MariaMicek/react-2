import React from 'react'
import Paper from '@material-ui/core/Paper';

const PaperRefined = (props) => {

    let childrenToRender = null

    if (props.doNotDisplayChildren){        //we can use if, when it's in function body 
        childrenToRender = null
    } else {
        childrenToRender = props.children
    }

    const renderComponent = (
        <div>
            <Paper
                style={{
                    margin: '20px',
                    padding: '20px',
                }}
            >
            {childrenToRender}
            </Paper>
        </div>
    )

    return renderComponent          //different way to return component
}

export default PaperRefined