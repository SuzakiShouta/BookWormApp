import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";

import KajiLibraryApi from '../../utils/KajiLibraryApi';
import BookCard from '../../components/BookCard';
import SearchForm from '../../components/SearchForm';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        margin: theme.spacing(2),
    },
    search: {
        margin: '0 auto',
    }
}));

export default function BookList() {
    const classes = useStyles();

    const [borroweds, setBorroweds] = React.useState();
    const [value, setValue] = React.useState('');
    const init = React.useCallback(async () => {
        const books = await KajiLibraryApi().books.getBooksList();
        setBorroweds(books);
    }, []);
    const location = useLocation();
    useEffect(() => {
        init();
      }, [init]);
    const handleChange = async (event) => {
        setValue(event.target.value);
        const data = await KajiLibraryApi().books.findByFilter({
            where: {
                "title": {
                    "regexp": event.target.value ? `/${event.target.value}/` : ".*"
            }}
        })
        setBorroweds(data);
    }

    const bookCards = borroweds ? borroweds.map((borrowed) => {
        console.log(borrowed,"\n",borrowed.borrowingStartDate)
        return <BookCard key={borrowed.id} id={borrowed.id} className={classes.card} /> 
    }): "";
    
    return (
        <div className={classes.root}>
            <SearchForm 
                value={value} 
                onChange={handleChange} 
                className={classes.search}
            />
            {bookCards}
        </div>
    );
}