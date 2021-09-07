import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import CustomBadge from './CustomBadge';
import { Link } from "react-router-dom";

import GoogleBooksApi from '../utils/GoogleBooksApi';
import KajiLibraryApi from '../utils/KajiLibraryApi';

const cardHeight = 125;
const now = new Date();

const timeUnits = [
    { time: 127008000, unit: '' },
    { time: 2419200, unit: 'ヶ月前' },
    { time: 604800, unit: '週間前' },
    { time: 86400, unit: '日前' },
    { time: 3600, unit: '時間前' },
    { time: 60, unit: '分前' },
    { time: 1, unit: '秒前' }
];

function timeDifference(createdAt, now) {
    const diff = Math.abs((createdAt.getTime() - now.getTime()) / 1000)
    const timeUnit = timeUnits.find((t) => t.time <= diff)
    const result = timeUnit?.unit
        ? Math.floor(diff / timeUnit.time) + timeUnit.unit
        : new Date(createdAt).toString()
    return result
};

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
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
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
    activeClassName: {
        textDecoration: 'none',
    },
}));

export default function BookCard(props) { //id引数にもらう bookのnfc id = borrowedのbookId
    const classes = useStyles();
    const [book, setBook] = React.useState();
    const init = React.useCallback(async () => {
        const kajiLibraryApiData = await KajiLibraryApi().books.getById(props.id);
        const googleBooksData = await GoogleBooksApi().books.getByIsbn(kajiLibraryApiData.isbn);
        const hasReturned = await KajiLibraryApi().books.hasReturnedById(props.id);
        const borrowingStartDate = new Date(props.borrowingStartDate);
        const thumbnail = googleBooksData.items?.[0].volumeInfo.imageLinks?.thumbnail
        const title = kajiLibraryApiData.title.length > 9 ? kajiLibraryApiData.title.slice(0, 8) + "..." : kajiLibraryApiData.title
        const author = kajiLibraryApiData.author.length > 9 ? kajiLibraryApiData.author.slice(0, 8) + "..." : kajiLibraryApiData.author
        setBook({
            thumbnail: thumbnail ? thumbnail : `${process.env.PUBLIC_URL}/image/NoImage.png`,
            ...kajiLibraryApiData,
            borrowingStartDate,
            title,
            author,
            hasReturned,
        });
    }, []);
    useEffect(() => {
        init();
    }, [init]);

    const tags = book ? book.tags.map((item) => {
        return <Chip className={classes.tag} label={item} variant="outlined" key={`${book.id}_${item}`} />
    }) : "";

    const borrowedDay = function (borrowingStartDate) {
        if (borrowingStartDate != "Invalid Date") {
            return <Typography variant="caption" align="left"> {timeDifference(borrowingStartDate, now)} </Typography>
        }
    }

    const badgePosition = function (borrowingStartDate) {
        if (borrowingStartDate != "Invalid Date") {
            return "15px"
        } return "0px"
    }

    return (
        <div className={props.className}>
            <CustomBadge
                backgroundColor={book ? (book.hasReturned ? '#56f000' : '#ffb302') : "#9ea7ad"}
                badgeContent={book ? borrowedDay(book.borrowingStartDate) : ""}
                right={book ? badgePosition(book.borrowingStartDate) : ""}
            >
                <Link to={`/bookDetail/${book?.id}`} className={classes.activeClassName}>
                    <Card
                        className={classes.card}
                    >
                        <CardMedia
                            className={classes.cover}
                            image={book ? book.thumbnail : "/image/loading.svg"}
                            // image="http://books.google.com/books/content?id=Ss3xzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                            title="Live from space album cover"
                        />
                        <CardContent className={classes.content}>
                            <Typography variant="h6" align="left">
                                {book ? book.title : <Skeleton variant="text" />}
                            </Typography>
                            <Typography variant="subtitle1" align="left">{/* color="textSecondary" */}
                                {book ? book.author : <Skeleton variant="text" />}
                            </Typography>
                            <div className={classes.tags}>
                                {tags}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </CustomBadge>
        </div>
    );
}