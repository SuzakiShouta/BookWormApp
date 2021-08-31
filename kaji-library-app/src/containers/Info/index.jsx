import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import SampleCard from './SampleCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Info: {
        width: '100%',
        maxWidth: 300,
        margin: theme.spacing(1),
        borderRadius: '5%',
        border: '3px solid',
        borderColor: "#d9b891",
    },
    
}));

export default function Info() {
    const classes = useStyles();

    return (
        <div className={classes.root}>   
            <img src={`${process.env.PUBLIC_URL}/image/HowTo/1.png`} className={classes.Info} />
            <img src={`${process.env.PUBLIC_URL}/image/HowTo/2.png`} className={classes.Info} />
            <img src={`${process.env.PUBLIC_URL}/image/HowTo/3.png`} className={classes.Info} />
            <img src={`${process.env.PUBLIC_URL}/image/HowTo/4.png`} className={classes.Info} />
            <img src={`${process.env.PUBLIC_URL}/image/HowTo/5.png`} className={classes.Info} />
            {/* <SampleCard title='タイトル' badgeColor='#56f000' author='著者' tag='タグ' /> */}
        </div>
    );
}