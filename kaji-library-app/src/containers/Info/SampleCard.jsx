import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import CustomBadge from '../../components/CustomBadge';

const cardHeight = 125; 

const useStyles = makeStyles((theme) => ({
    card: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        width: 320,
        height: cardHeight,
    },
    content: {
        height: '100%',
        flex: 1,
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(0),
    },
    cover: {
        height: '100%',
        width: 90,
    },
    tags: {
        height: '100%',
        width: '100%',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        display: 'flex',
    },
    tag: {
        marginRight: 10,
    },
}));

export default function SampleCard(props) { //props = badgeColor, title, author, tag
    const classes = useStyles();
    
    return (
        <div className={props.className}>
            <CustomBadge 
                size={20}
                backgroundColor={props.badgeColor}
                badgeContent=" "
            >
                <Card
                    className={classes.card}
                > 
                    <CardMedia
                        className={classes.cover}
                        image={"/image/loading.svg"}
                        title="Live from space album cover"
                    />  
                    <CardContent className={classes.content}>
                        <Typography variant="h6" align="left">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" align="left" color="textSecondary">
                            {props.author}
                        </Typography>
                        <div className={classes.tags}>
                            <Chip className={classes.tag} label={props.tag} variant="outlined" />
                        </div>
                    </CardContent>
                </Card>
            </CustomBadge>
        </div>
    );
}