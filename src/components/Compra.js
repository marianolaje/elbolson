import React from 'react'
import {useLocation} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        whiteSpace: 'pre-wrap',
    },
    alignCenter: {
        textAlign: 'center',
        boxShadow: '0px -2px 2px 0px #E5E7EB',
        paddingTop: 10
    },
    spreadButtons: {
        marginRight: 40,
    },
    buttonSize: {
        '& button': {
            maxHeight: 20,
            fontSize: 10,
        }
    },
    images: {
        maxWidth: '300px',
        display: 'flex',
        textAlign: 'center',
        margin: '0px auto'
    },
    videos: {
        [theme.breakpoints.down(580)]: {
            maxWidth: '315px',
        },
        [theme.breakpoints.up(580)]: {
            maxWidth: '760px',
            height: '400px',
        },

        marginTop: 30
    },
    containerInfo: {
        backgroundColor: 'transparent',
        paddingBottom: 30
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Lato"',
            '"Roboto"',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#28C339'
        },
        secondary: {
            main: '#011238',
        }
    },
});

const Compra = () => {
    const classes = useStyles();
    let location = useLocation()

    console.log("ADSASDASD")

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" className={classes.containerInfo}>

                <Paper elevation={2}
                       className={classes.root}
                >
                    <p>Bienvenido a tu carro</p>
                </Paper>
            </Container>
        </ThemeProvider>

    )
}

export default Compra