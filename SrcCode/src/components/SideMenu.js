import React from 'react'
import { makeStyles } from '@material-ui/core'



// styles

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        width: '50px',
        height: '100%',
        background: 'linear-gradient(0deg, rgba(222,88,219,1) 13%, rgba(255,153,0,0.9699230033810399) 100%) ',
    }
})

const SideMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default SideMenu
