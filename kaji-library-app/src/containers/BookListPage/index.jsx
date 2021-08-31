import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import KajiLibraryApi from '../../utils/KajiLibraryApi';
import BookCard from '../../components/BookCard';
import SearchForm from '../../components/SearchForm';
import Button from '@material-ui/core/Button';

import { animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    search: {
        margin: '0 auto',
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '90vw',
    },
    card: {
        margin: theme.spacing(2),
    },
    page: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '90vw',
    },
}));

const limit = 10;

export default function BookListPage() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { page } = useParams();

    const [value, setValue] = React.useState('');
    const [bookCards, setBookCards] = React.useState([]);


    const handleChange = async (event) => {
        setValue(event.target.value);
        const value = event.target.value;
        const data = await KajiLibraryApi().books.findByFilter({
            where: {
                "title": { "regexp": value ? `/${value}/` : ".*" }
            }
        });
        console.log(typeof (data), ",", data)
        const res = data.map(item =>
            <BookCard
                key={item.id}
                id={item.id}
                className={classes.card}
                borrowingStartDate={item.borrowingStartDate}
            />
        )
        setBookCards(res)
    }

    const nextPage = React.useCallback(async (index) => {
        const data = await KajiLibraryApi().books.getBooksLimitList(index * 10 - 10, limit)
        const res = data.map(item =>
            <BookCard
                key={item.id}
                id={item.id}
                className={classes.card}
                borrowingStartDate={item.borrowingStartDate}
            />
        )
        setBookCards(res)
    }, [])

    React.useEffect(() => {
        console.log(location.pathname);
        nextPage(page);
    }, []);

    return (
        <div className={classes.root}>
            <SearchForm
                value={value}
                onChange={handleChange}
                className={classes.search}
            />
            <div className={classes.cards}>
                {bookCards}
            </div>
            <div className={classes.page}>
                <Button
                    onClick={() => {
                        if (Number(page) > 1) {
                            nextPage(Number(page) - 1)
                            history.push(`/bookList/${Number(page) - 1}`)
                        }
                        scroll.scrollToTop();
                    }}
                >
                    戻る
                </Button>
                <Button
                    onClick={() => {
                        nextPage(Number(page) + 1)
                        history.push(`/bookList/${Number(page) + 1}`)
                        scroll.scrollToTop();
                    }}
                >
                    次へ
                </Button>
            </div>
        </div>
    );
}