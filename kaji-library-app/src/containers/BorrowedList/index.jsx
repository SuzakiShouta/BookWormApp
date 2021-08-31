import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";

import KajiLibraryApi from '../../utils/KajiLibraryApi';
import BookCard from '../../components/BookCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        margin: theme.spacing(2),
    }
}));

export default function BorrowedList() {
    const classes = useStyles();

    const [borroweds, setBorroweds] = React.useState();
    const init = React.useCallback(async () => {
        const data = await KajiLibraryApi().borroweds.getWhereHasReturned(false);
        setBorroweds(data);
    }, []);
    const location = useLocation();
    useEffect(() => {
        init();
      }, [init]);

    const bookCards = borroweds ? borroweds.map((borrowed) => {
        return <BookCard key={borrowed.id} id={borrowed.booksId} borrowingStartDate={borrowed.borrowingStartDate} className={classes.card} /> 
    }): "";
    
    return (
        <div className={classes.root}>
            {bookCards}
        </div>
    );
}