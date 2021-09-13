import React from 'react';
import {Route} from 'react-router-dom'
import useStyles from  './Style';
import Grid from '@material-ui/core/Grid';
import Menu from './Components/Menu'
import Filter from './Components/Filter';
import Images from "./Components/Container/Images";
import Second from "./Components/Container/Second";
import Third from "./Components/Container/Third";

  const App = () => {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Filter/>
          </Grid>

          <Grid item xs={12} sm={1}>
            <Menu/>
          </Grid>

          <Grid item xs={12} sm={11}>
            <Route path='/list' component={Images}/>
            <Route path='/group' component={Second}/>
            <Route path='/vertical' component={Third}/>
          </Grid>

        </Grid>

      </div>
  )

}

export default App;
