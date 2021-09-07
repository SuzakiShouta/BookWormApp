import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';


export default function ProjectTitleForm(props) {
    const css = {
        fontSize: "5px",
        color: "black",
        backgroundColor: '#56f000',
        badgeContent: " ",
    };
    if (props.size) {css.size = props.size;};
    if (props.color) css.color = props.color;
    if (props.backgroundColor) css.backgroundColor = props.backgroundColor;
    if (props.badgeContent) css.badgeContent = props.badgeContent;

    const useStyles = makeStyles((theme) => ({
        customBadge: {
            fontSize: css.fontSize,
            borderRadius: "100%",
            "& > span": {
                backgroundColor: css.backgroundColor
            }
        }
    }));

    const classes = useStyles();

    return (
        <Badge
            // overlap={props.overlap}
            badgeContent={css.badgeContent}
            className={classes.customBadge}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {props.children}
        </Badge>
    );
}