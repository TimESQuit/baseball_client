import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import CustomThemeProvider from "./styles/CustomThemeProvider";
import Nav from "./components/nav/Nav";
import { RouteFunc, pages } from "./Routes";
import NotFoundPage from "./components/NotFoundPage";

const useStyles = makeStyles(() =>
  createStyles({
    rootPaper: {
      minHeight: "100vh",
      minWidth: "320px",
      paddingBottom: "5vh",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <HelmetProvider>
        <Helmet>
          <title>Tim's Baseball Analysis</title>
        </Helmet>
        <CssBaseline>
          <CustomThemeProvider>
            <Paper square className={classes.rootPaper}>
              <Nav />
              <Switch>
                {pages.map((route, i) => {
                  return <RouteFunc key={i} {...route} />;
                })}
                <Route component={NotFoundPage} />
              </Switch>
            </Paper>
          </CustomThemeProvider>
        </CssBaseline>
      </HelmetProvider>
    </Router>
  );
};

export default App;
