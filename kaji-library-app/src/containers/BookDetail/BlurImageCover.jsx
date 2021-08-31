import React from "react";
// clsx
import clsx from 'clsx';
// @material-ui
import { makeStyles } from "@material-ui/core/styles";


export default function BlurImageCover(props) {
    const useStyles = React.useMemo(() => {
        const css = {
            blur: props.blur ? props.blur : 10,
            coverColor: props.coverColor ? props.coverColor : "",
        };

        return makeStyles((theme) => ({
            background: {
                height: "inherit",
                background: `url(${props.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                '&::before': {
                    content: "''",
                    background: "inherit",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    filter: `blur(${css.blur}px)`,
                    position: "absolute",
                    top: `-${css.blur}px`,
                    left: `-${css.blur}px`,
                    right: `-${css.blur}px`,
                    bottom: `-${css.blur}px`,
                    zIndex: -1,
                },

            },
            backgroundCover: {
                height: '100%',
                width: '100%',
                backgroundColor: css.coverColor,
            },
        }));

    }, [props]);

    const classes = useStyles();

    return (
        <div
            className={clsx(classes.background, props.className)}
        >
            <div
                className={classes.backgroundCover}
            >
                {props.children}

            </div>
        </div>
    );
}