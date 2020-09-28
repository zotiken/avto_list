import './App.scss';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import duck from "../src/duck.png"
import Form from '../src/components/Form/AddressForm';
import List from './components/List/List';
import Context from './Context/Context'
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 720,
      lg: 1000,
      xl: 1920,
    },
  },
})

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center" style={{ color: "#fff", fontSize: "13px" }}>
      <p style={{ margin: "0" }} >{'© 2020 CAPTAIN QUACK'}</p>
      <Link color="inherit" href="#">
        "Десница тысячелетия и моллюск!"
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    backgroundColor: "#fff",
    padding: theme.spacing(8, 0, 6),
    paddingBottom: "266px",
    [theme.breakpoints.down(360)]: {
      paddingBottom: 0,
    },

    [theme.breakpoints.up(978 + theme.spacing(2) * 2)]: {
      width: 998,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  bar: {
    backgroundColor: "#282D30",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  form: {
    paddingBottom: '134px',
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.up(360)]: {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up(720)]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  },

  title: {
    fontWeight: "bold",
    fontSize: "42px",
    lineHeight: "49px",
    color: "#282D30",
    marginBottom: "60px"
  },
  media: {
    width: "300px",
    height: "63px",
    [theme.breakpoints.up(360)]: {
      width: "494px",
      height: "104px",
    },

  },
  cardContent: {
    flexGrow: 1,
  },
  list: {
    width: 958,
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 958,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

  },
  list_wrapper: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up(720)]: {
      paddingLeft: 20,
      paddingRight: 20
    },
  },
  footer: {
    backgroundColor: "#282D30",
    color: "#fff",
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Context>
        <React.Fragment>
          <CssBaseline />
          <AppBar className={classes.bar} position="relative" color="inherit">
            <CardMedia
              className={classes.media}
              image={duck}
            />
          </AppBar>
          <main className={classes.layout}>
            <Container maxWidth="lg" className={classes.form}>
              <Typography className={classes.title} component="h1" variant="h4" align="center" color="inherit" >
                ¡Ay caramba
            </Typography>
              <Form />
            </Container>
            <Container maxWidth="lg" className={classes.list_wrapper}>
              <List />
            </Container>
          </main>
          <footer className={classes.footer} color="inherit">
            <Copyright />
          </footer>
        </React.Fragment>
      </Context>
    </ThemeProvider>

  );
}
