import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core'



// <style>

const useStyles = makeStyles({

   
    pageHeader: {
        padding: '2em',
        display: 'flex',
        marginBottom:'1em'
    },
    pageIcon: {
        display: 'inline-block',
        padding: '1em',
        boxShadow: 'none',
        background: 'linear-gradient(360deg, rgba(222,88,219,1) 13%, rgba(255,153,0,0.9699230033810399) 100%) ',
        color: '#fff',
        borderRadius: '50px'
    },
    pageTitle: {
        paddingLeft: '1em'
    }

})


const PageHeader = (props) => {
    
    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper elevation={0} square  >
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>

                <div className= {classes.pageTitle}>
                    <Typography
                        variant='h6'
                        component= 'div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle5'
                        component= 'div'
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
