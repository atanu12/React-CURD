import { Button } from '@material-ui/core';
import React from 'react'

function Action(props) {
    const { color, children, onClick } = props;
    return (
        <Button
         onClick={onClick} >
            {children}
        </Button>
    )
}

export default Action
