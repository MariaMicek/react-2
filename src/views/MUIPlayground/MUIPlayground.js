import React from 'react'
import Button from '@material-ui/core/Button';
import PaperRefined from '../../components/PaperRefined';


const MUIPlayground = () => {
    return (
        <div>
            <PaperRefined
                doNotDisplayChildren={true}
            >
                <Button
                    variant={"contained"}
                    color={"secondary"}
                    onClick={() => alert('Klik')}
                >
                    Secondary
                </Button>
            </PaperRefined>
            
        </div>
    )
}

export default MUIPlayground