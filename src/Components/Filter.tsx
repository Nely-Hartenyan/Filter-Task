import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import useStyles from "../Style";
import {useDispatch} from "react-redux";
import {filterAction} from "../Store/FilterReducer";


const Filter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const filter = (s:string) => {
        dispatch(filterAction(s));

    }

    return (
        <Paper className={classes.paper}>
            <Tabs
                value={false}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab className={classes.tab}
                    label="Mammals"
                     onClick={() => filter('mammals')}/>

                <Tab  className={classes.tab}
                    label="Birds"
                     onClick={() => filter('birds')}/>

                <Tab  className={classes.tab}
                    label="Fishes"
                     onClick={() => filter('fishes')}/>

            </Tabs>
        </Paper>

    )
}

export default Filter
