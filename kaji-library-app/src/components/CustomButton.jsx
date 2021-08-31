import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


export default function ProjectTitleForm(props) {
    const css = {
        size: 30,
        width: "auto",
        color: "black",
        backgroundColor: 'red',
    };
    if (props.size) css.size = props.size;
    if (props.width) css.width = props.width;
    if (props.color) css.color = props.color;
    if (props.backgroundColor) css.backgroundColor = props.backgroundColor;

    const useStyles = makeStyles((theme) => ({
        customButton: {
            "& > span": {
                color: css.color,
                fontSize: css.size * 0.65,
                width: css.width,
                height: css.size,
                borderRadius: css.size * 0.2,
                backgroundColor: css.backgroundColor,
            },
        }
    }));

    const classes = useStyles();

    return (
        <Button
        >
            {props.children}
        </Button>
    );
}