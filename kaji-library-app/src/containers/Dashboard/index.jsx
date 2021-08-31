import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BottomMenu from './BottomMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f2e7d9',
        backgroundRepeat: 'repeat-y',
        backgroundAttachment: 'fixed',
    },
    logo: {
        width: 120, 
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
    waveMenu: {
        width: '100%',
        position: 'fixed',
        zIndex: 100,
        bottom: 0,
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(12),
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

export default function Dashboard(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}> 
            <img 
                src={`${process.env.PUBLIC_URL}/image/logo.svg`} 
                className={classes.logo}
            />
            <main>
                <Container className={classes.container}>
                    {props.children}
                </Container>
            </main>
            <BottomMenu className={classes.waveMenu} />
        </div>
    );
}