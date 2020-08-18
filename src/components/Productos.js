import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Producto from "./Producto";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        maxWidth: 660,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: theme.palette.background.paper,
    },
}));

const Productos = ({infoData, setInfoBool, setInfoRow}) => {
    const classes = useStyles();
    const [info, setInfo] = useState([])

    let location = useLocation()

    useEffect(()=>{
        const url = location.pathname;
        if(url.indexOf('/') !== url.lastIndexOf('/')){
            setInfoBool(true)
        }
        else if(url.indexOf('/') !== url.lastIndexOf(url.charAt(url.length-1)) && url.indexOf('/') === url.lastIndexOf('/')) {
            setInfoBool(false)
            setInfo(infoData.filter(row => row.urltitlefather === url))

        } else {
            setInfoBool(false)
            setInfo(infoData)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, setInfoBool])


    const boxComponent = () => {
        const resultInfo = infoData ?
            infoData.map((infoRow) => (
                <Producto
                    key = {infoRow.id}
                    infoRow = {infoRow}
                    setInfoRow={setInfoRow}
                    setInfoBool={setInfoBool}
                />
            ))
            : null
        return resultInfo
    }

    return (
        <div className={classes.root}>
            {boxComponent()}
        </div>
    );
}

export default Productos