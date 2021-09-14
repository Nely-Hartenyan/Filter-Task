import React, {FC} from 'react'

import Paper from '@material-ui/core/Paper';
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import {defaultStateType, IImage} from "../../Type/Type";
import useStyles from "../../Style";


    const Images:FC = () => {

    const classes = useStyles();
    const myState =useSelector((state:defaultStateType)=>state)

    const images = myState.images
    const filtered = myState.filtered

    let items:IImage[] = images.filter( (el:IImage) => filtered === "mammals" ? el.filter === "mammals" :
    filtered === "birds" ? el.filter === 'birds' : filtered === 'fishes' ? el.filter === 'fishes' : true);

    // if (filtered === 'mammals') {
    //     items = images.filter((item:IImage) => item.filter === 'mammals')
    // } else if (filtered === 'birds') {
    //     items = images.filter((item:IImage) => item.filter === 'birds')
    // } else if (filtered === 'fishes') {
    //     items = images.filter((item:IImage)=> item.filter === 'fishes')
    // } else if (filtered === '') {
    //     items = images
    // }

    return (
        <Paper className = {classes.paper}>

            {items.map((image:IImage)=> {
                return (
                    <Box component="span" m = {1} key = {image.id}>
                        <img src = {image.url} alt = "" className = {classes.img}/>
                    </Box>
                )
            })}

        </Paper>
    )
}

export default Images;