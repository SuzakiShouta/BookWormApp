import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  menu: {
      width: '100%',
      backgroundColor: '#d9b891',
      position: 'relative',
      '&::before': {
        content: "''",
        width: '100%',
        height: '30px',
        backgroundImage: `url('${process.env.PUBLIC_URL}/image/wave.svg')`,
        backgroundSize: 'auto 30px',
        backgroundRepeat: 'repeat-x',
        position: 'absolute',
        top: -25,
      }
  },
  actionItem: {
    color: '#58311f',
    paddingTop: 0,
    "&$selected": {
      // color: "#f2e7d9",
      color: "#101614",
      fontWeight: 'bold',
    }
  },
  selected: {}
});

export default function BottomMenu(props) {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <div className={props.className}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={clsx(classes.menu)}
      >
          <BottomNavigationAction 
            classes={{
              root: classes.actionItem,
              selected: classes.selected
            }}
            label="見つける" 
            icon={<SearchIcon />} 
            component={Link}
            to="/bookList/1"
            value="/bookList/1"
          />
          <BottomNavigationAction
            classes={{
              root: classes.actionItem,
              selected: classes.selected
            }}
            label="貸出中" 
            icon={<BookIcon />} 
            component={Link}
            to="/borrowedList"
            value="/borrowedList"
          />
          <BottomNavigationAction 
            classes={{
              root: classes.actionItem,
              selected: classes.selected
            }}
            label="使い方" 
            icon={<InfoIcon />} 
            component={Link}
            to="/info"
            value="/info"
          />
      </BottomNavigation>
    </div>
  );
}
