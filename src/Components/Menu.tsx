import React from 'react';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListAltIcon from "@material-ui/icons/ListAlt";
import GroupIcon from "@material-ui/icons/Group";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import Paper from "@material-ui/core/Paper";
import useStyles from "../Style";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filterAction} from "../Store/FilterReducer";


const Menu = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const filter = (s:string) => {
        dispatch(filterAction(s));
        console.log(s)
    }


    return (
        <Paper className={`${classes.paper} ${classes.paperHeight}`}>
            <MenuList>
                <NavLink to='/list'
                         onClick={() => filter('')}>
                    <MenuItem>
                        <ListAltIcon/>
                    </MenuItem>
                </NavLink>

                <NavLink to='/group'>
                    <MenuItem>
                        <GroupIcon/>
                    </MenuItem>
                </NavLink>

                <NavLink to='/vertical'>
                    <MenuItem>
                        <VerticalSplitIcon/>
                    </MenuItem>
                </NavLink>

            </MenuList>
        </Paper>
    )
}

export default Menu;