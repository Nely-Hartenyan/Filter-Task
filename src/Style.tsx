import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperHeight:{

        height:'100%',
        position:'fixed'
    },
    navlink:{
        textDecoration:'none',
        color:'black',

    },
    tab:{
        '&:hover':{
            background:'#c1c1c1',
            opacity:'0.6',
            color:'black'
        }
    }

}));

export default useStyles