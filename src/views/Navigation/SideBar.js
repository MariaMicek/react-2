import React from 'react'

import Drawer from '@material-ui/core/Drawer';

const styles = {
    drawer:{
        width: '200px'
    }
}

const SideBar = () => {
    return(
        <div>
            <Drawer 
                open={false} 
                onClose={() => console.log('toggle')}
            >
            <div
                style={styles.drawer}
            >
            </div>
            </Drawer>
        </div>
    )
}

export default SideBar