import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../../config/theme';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
  MuiThemeProvider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Template = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid container color="primary" spacing={3}>
          <Grid item xs={12}>
            <CssBaseline />
              <AppBar className="app-bar">
                <Toolbar className="tool-bar">
                  <div className="main-title__wrapper">
                    <WbSunnyIcon edge="start" />
                    <Typography variant="h6" component="h1" className="main-title" edge="start">
                      {props.title}
                    </Typography>
                  </div>
                  {props.homeButton && <div className="home-button">
                    <Link to="/"><HomeIcon /></Link>
                  </div>}
                </Toolbar>
              </AppBar>
              <Container className="general__container">
                {props.children}
              </Container>
              <div className="author-sign">
                developed by Irwin Eguiluz
              </div>
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  )
}

export default Template;