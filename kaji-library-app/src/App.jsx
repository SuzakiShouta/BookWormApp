import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './containers/Dashboard';
import BorrowedList from './containers/BorrowedList';
import BookDetail from './containers/BookDetail';
import Info from './containers/Info';
import BookList from './containers/BookList';
import BookListPage from './containers/BookListPage';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Noto Sans JP", sans-serif !important',
    },
    overrides: {
      MuiButtonBase: {
        root: {
          outline: "0 !important",
        },
      },
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
            <Route path="/">
              <Dashboard>
                <Route path="/borrowedList" component={BorrowedList} />
                <Route path="/bookDetail/:id" component={BookDetail} />
                <Route path="/info" component={Info} />
                <Route path="/search" component={BookList} />
                <Route path="/bookList/:page" component={BookListPage} />
                {/* <Route path="/dashboard/projectview/:id" component={ProjectView} /> */}
              </Dashboard>
            </Route>
          <Route>404</Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
