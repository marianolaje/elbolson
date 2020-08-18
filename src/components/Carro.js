import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import SvgIcon from "@material-ui/core/SvgIcon";


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: '99999',
        width: '100%',
        flexWrap: 'wrap',
        paddingLeft: '20px',
        boxShadow: '0px 2px #E5E7EB',
        '& > *': {
            margin: theme.spacing(1.3),
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
    },
    widthBig: {
        width: 150,
        marginTop: 23,
        fontSize: 30
    },
    imagen: {
        width: 20,
        height: 20
    },
    volver: {
        position: 'fixed',
        bottom: '80px',
        right: '30px',
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
});

const Volver = ({setGoCarro}) => {
    const classes = useStyles();

    const history = useHistory()

    const goShopp = () => {
        history.push('/cart')
        setGoCarro(true)
    }

    return(
        <ThemeProvider theme={theme}>
            <div className={classes.volver}>
                <Paper elevation={2}
                       className={classes.root}
                       onClick={goShopp}
                >
                    <SvgIcon component={ShoppingCartIcon} style={{ color: '#D7263D' }} className={classes.imagen} />
                </Paper>
            </div>
        </ThemeProvider>
    )
}

export default Volver