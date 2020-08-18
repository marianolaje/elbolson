import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import HeaderComp from './components/HeaderComp'
import Productos  from './components/Productos'
import TitleSection from './components/TitleSection'
import Informacion from './components/Informacion'
import Carro from './components/Carro'
import Volver from './components/Volver'
import Compra from './components/Compra'

import infoDataJson from './mocks/information.json'
import Paper from '@material-ui/core/Paper';
import Typography           from '@material-ui/core/Typography';
import ErrorIcon            from '@material-ui/icons/Error';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
    responseContainer: {
        padding: 32,
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        backgroundColor: 'floralwhite',
        margin: '16px 0',
        width: 320
    },
    iconFailure: {
        color: 'red',
        fontSize: 120,
        marginTop: -10
    },
    titleTheme: {
        color: 'black',
        fontWeight: 'normal',
        margin: '10px auto'
    },
    text: {
        color: 'dimgrey',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24
    },
    loadingContainer: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        background: 'white',
        padding: 16,
        [theme.breakpoints.up(480)]: {
            width: 460
        },
        [theme.breakpoints.up(1024)]: {
            marginTop: 64
        },
    },

}));

function App() {
    const {
        responseContainer,
        iconFailure,
        titleTheme,
        text,
    } = useStyles();

    const [infoData, setInfoData] = useState([])
    const [infoRow, setInfoRow] = useState([])
    const [infoBool, setInfoBool] = useState(false)
    const [title, setTitle] = useState({})
    const [realUrl, setRealUrl] = useState(true)
    const [goCarro, setGoCarro] = useState(false)

    useEffect(()=>{
        setInfoData(infoDataJson)
    }, [infoData])


    return (
        <div>
            <Router >
                <HeaderComp
                    setInfoBool={setInfoBool}
                />

                <TitleSection
                    infoData={infoData}
                    title={title}
                    setTitle={setTitle}
                    setInfoBool={setInfoBool}
                    setRealUrl={setRealUrl}
                    setGoCarro={setGoCarro}
                />
                <Switch>
                    <Route exact path="/cart">
                        <Compra
                            infoData={infoData}
                        />
                    </Route>
                    <Route path="/">
                        {
                            infoBool && realUrl && !goCarro && (
                                <Informacion
                                    infoData={infoData}
                                />
                            )
                        }
                        {
                            infoData && !infoBool && realUrl && !goCarro && (
                                <Productos
                                    infoData={infoData}
                                    setInfoBool={setInfoBool}
                                    setInfoRow={setInfoRow}
                                />
                            )
                        }
                    </Route>
                </Switch>
                <Carro
                    setGoCarro={setGoCarro}
                />
                <Volver
                    setInfoBool={setInfoBool}
                />
            </Router>
        </div>

    );

}

export default App;


//TODO:
// - Agregar el componente de Compra (entero, con formulario y envío de información)
// - Agregar el botón para sumar items al carro en componente Información
