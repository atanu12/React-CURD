import React from 'react';
import { AppBar, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';

// style

const useStyle = makeStyles({

    menuBar: {
        backgroundColor: '#ffffff',
        color: "#535C68",
        transform:'translateZ(0)',
    },

    titleMenu: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        display: 'flex',
        alignItems: 'center',   
    },

    buttonIcon: {
        color: "#535C68",
    },
    search: {
        color: "#535C68",
        backgroundColor:'#C9D0D9'
    }
})

function Header() {
    const classes = useStyle();
    return (
        <div>
            <AppBar position="static" className={classes.menuBar}>
                <Toolbar>
                    <Grid >
                        <IconButton className={classes.buttonIcon, classes.search}>
                            <SearchIcon/>
                        </IconButton> 
                    </Grid>

                    <Grid item sm={true}>
                    </Grid>

                    <Grid className={classes.titleMenu}>
                        <Typography >
                            + Add
                        </Typography>
                        <IconButton className={classes.buttonIcon} >
                            <MailOutlineIcon/>
                        </IconButton>

                        <Typography className={classes.titleText}>
                            Make History <ArrowDropDownIcon/>  
                        </Typography>

                        <IconButton className={classes.buttonIcon} >
                             <NotificationsIcon/>
                         </IconButton>
                    
                    </Grid>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header
