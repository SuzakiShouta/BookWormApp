import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import KajiLibraryApi from '../../utils/KajiLibraryApi';
import GoogleBooksApi from '../../utils/GoogleBooksApi';
import BlurImageCover from "./BlurImageCover";
import CustomChip from './CustomChip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: { 
        height: 300,
        minWidth: 200,
        width: '100vw',
        position: 'relative',
    },
    whiteGradeMask: {
        height: '100%',
        width: '100%',
        position: 'relative',
        '&::after':{
            position: 'absolute',
            bottom: -1,
            zIndex: 2,
            content: "''",
            width: '100%',
            height: '50%',
            background: 'linear-gradient(rgba(242, 231, 217, 0) 0, rgba(242, 231, 217, .7) 20%, rgba(242, 231, 217, 1) 80%)',
        }
    },
    bookImage: {
        height: 200,
        width: 142,
        backgroundColor: 'red',
        zIndex: 3,
        position: 'absolute',
        top : '20%',
        left: '5%',
    },
    returned: {
        width : 100,
        height: 30,
        zIndex: 4,
        position: 'absolute',
        top : '77%',
        right: '10%',
    },
    info: {
        minHeight: 100,
        width: '85vw',
        zIndex: 4,
        margin: '0 auto',
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
    textSnippet: {
        backgroundColor: '#E6D6C1',
    }

}));

function createData(hasReturned, slackName, borrowingStartDate, borrowingEndDate) {
    console.log(hasReturned, slackName, borrowingStartDate, borrowingEndDate);
    return { hasReturned, slackName, borrowingStartDate, borrowingEndDate };
}

export default function BookDetail() {
    const classes = useStyles();
    const params = useParams(); //borrowed の id
    const [book, setBook] = React.useState();
    const [row, setRow] = React.useState([]);
    var dateFormat = require('dateformat');
    const init = React.useCallback(async () => {
        const kajiLibraryApiData = await KajiLibraryApi().books.getById(params.id);
        console.log(kajiLibraryApiData)
        const googleBooksData = await GoogleBooksApi().books.getByIsbn(kajiLibraryApiData.isbn);
        console.log(googleBooksData)
        const hasReturned = await KajiLibraryApi().books.hasReturnedById(params.id);
        const thumbnail = googleBooksData.items?.[0].volumeInfo.imageLinks?.thumbnail
        const textSnippet = googleBooksData.items?.[0].searchInfo?.textSnippet
        const data = {
            thumbnail: thumbnail ? thumbnail : `${process.env.PUBLIC_URL}/image/NoImage.png` ,
            hasReturned,
            title: googleBooksData.items[0].volumeInfo.title,
            author: googleBooksData.items[0].volumeInfo.author,
            textSnippet: textSnippet ? textSnippet : "",
            ...kajiLibraryApiData,
        }
        const borrowedList = await KajiLibraryApi().borroweds.getById(params.id);
        setRow(await Promise.all(borrowedList.map( async borrowed => {
            const user = await KajiLibraryApi().users.getById(borrowed.usersId);
            console.log(user);
            console.log( dateFormat(borrowed.borrowingStartDate, "isoDate") );
            return createData(
                borrowed.hasReturned, 
                user.slackName, 
                dateFormat(borrowed.borrowingStartDate, "isoDate"), 
                // dateFormat(borrowed.borrowingEndDate, "isoDate"),
                borrowed?.borrowingEndDate ? dateFormat(borrowed.borrowingEndDate, "isoDate") : "" ,
            );
        })));
        console.log(row[0]);
        setBook(data);
        console.log(data);
    }, []);   
    const location = useLocation();
    useEffect(() => {
        init();
      }, []);

    const tags = book ? book.tags.map((item) => {
        return <CustomChip className={classes.tag} chipLabel={item} variant="outlined" key={`${book.id}_${item}`} backgroundColor="white" size="30" />
    }): "";
    
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.whiteGradeMask}>
                    <BlurImageCover src={book ? book.thumbnail : "/image/loading.svg"} className={classes.blurImage}/>
                </div>
                <img src={book ? book.thumbnail : "/image/loading.svg"}
                    className={classes.bookImage} 
                />
                <div className={classes.returned}>
                    <CustomChip 
                    backgroundColor={book ? (book.hasReturned ? '#56f000' : '#ffb302'): "#9ea7ad"} 
                    chipLabel=" " 
                    size = {30}
                    width = {100}
                    />
                </div>
            </div>
            <div className={classes.info}>
                <Typography variant="h5" gutterBottom>
                    {book? book.title : 'NoData'}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {book? book.author : 'NoData'}
                </Typography>
                <div className={classes.tags}>
                    {tags}
                </div>
            </div>
            <div className={classes.textSnippet}>
                <Typography variant="h6" gutterBottom>
                    {book ? book.textSnippet : "NoData" }
                </Typography>
            </div>
            <div className={classes.table}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>貸出状況</TableCell>
                                <TableCell align="right">slack名</TableCell>
                                <TableCell align="right">貸出日</TableCell>
                                <TableCell align="right">返却日</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row ? row.map((item) => (
                                <TableRow key={item.hasReturned}>
                                    <TableCell component="th" scope="row">
                                        {item.hasReturned ? "返却済" : "貸出中"}
                                    </TableCell>
                                    <TableCell align="right">{item.slackName}</TableCell>
                                    <TableCell align="right">{item.borrowingStartDate}</TableCell>
                                    <TableCell align="right">{item.borrowingEndDate}</TableCell>
                                </TableRow>
                            )) : "" } 
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}