import React from 'react'
import {
    Button as MuiButton, makeStyles
} from "@material-ui/core";
  
const useStyles = makeStyles({
    root: {
        padding: '.5em 1.5em ',
        margin: '2em ',
        alignItems: 'center',
    }
})

function Btn( props) {

    const { text, size, color, varient, onClick, ...other } = props
    
    const classes = useStyles();
    return (
        <MuiButton
            variant={varient || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onClick}
            {...other}
            className={classes.root}
        > {text}
         </MuiButton>
    )
}

export default Btn
