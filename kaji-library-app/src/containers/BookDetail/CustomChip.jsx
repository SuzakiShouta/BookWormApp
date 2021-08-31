import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';


export default function ProjectTitleForm(props) {
    const css = {
        size: 50,
        width: "auto",
        color: "black",
        backgroundColor: 'white',
    };
    if (props.size) css.size = props.size;
    if (props.width) css.width = props.width;
    if (props.color) css.color = props.color;
    if (props.backgroundColor) css.backgroundColor = props.backgroundColor;

    const useStyles = makeStyles((theme) => ({
        customChip: {
            "& > span": {
                color: css.color,
                fontSize: css.size * 0.65,
                minWidth: css.size,
                width: css.width,
                height: css.size,
                borderRadius: css.size / 2,
                backgroundColor: css.backgroundColor,
            },
        }
    }));

    const classes = useStyles();

    return (
        <Chip
            label={props.chipLabel}
            className={classes.customChip}
        >
            {props.children}
        </Chip>
    );
}