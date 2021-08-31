import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';


export default function ProjectTitleForm(props) {
    const css = {
        size: 50,
        color: "black",
        backgroundColor: 'white',
    };
    if (props.size) css.size = props.size;
    if (props.color) css.color = props.color;
    if (props.backgroundColor) css.backgroundColor = props.backgroundColor;

    const useStyles = makeStyles((theme) => ({
        customBadge: {
            "& > span": {
                color: css.color,
                fontSize: css.size * 0.65,
                width: css.size,
                height: css.size,
                borderRadius: css.size / 2,
                backgroundColor: css.backgroundColor,
            },
        }
    }));

    const classes = useStyles();

    return (
        <Badge
            overlap={props.overlap}
            badgeContent={props.badgeContent}
            className={classes.customBadge}
        >
            {props.children}
        </Badge>
    );
}