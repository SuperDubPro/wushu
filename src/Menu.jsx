import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Route, Switch, withRouter} from "react-router-dom";
import Meridians from "./components/Meridians";
import MeridianBranch from "./components/MeridianBranch";
import EditZone from "./components/EditZone";
import ViewZone1 from "./components/ViewZone1";
import ViewZone2 from "./components/ViewZone2";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth:'95%'
    },
});

 function Menu (props) {

    const [nav, setNav]=useState('meridians')
    const classes= useStyles();
    console.log('menu');
    return (
        <Grid container spacing={3} justify='center' className={classes.root}>
                <Grid item xs={12}>
                    <BottomNavigation
                    value={nav}
                    onChange={(event, newValue) => {
                        console.log(event, newValue)
                        setNav(newValue);
                        switch (newValue) {
                            case 'meridians':
                                props.history.push(`/meridians`);
                                break;
                            case 'zones':
                                props.history.push(`/developerZone`);
                                break;
                            default:
                                props.history.push(`/meridians`);
                        }

                    }}
                    showLabels
                    className={classes.root}
                    >
                        <BottomNavigationAction label="Меридианы" value={'meridians'} />
                        <BottomNavigationAction label="Зоны" value={'zones'} />
                    </BottomNavigation>
            </Grid>
            <Grid item xs={12}>
                <Switch>
                    <Route path="/meridians">
                        <Meridians />
                    </Route>
                    <Route path="/meridianBranch/:id">
                        <MeridianBranch />
                    </Route>
                    <Route path="/developerzone">
                        <EditZone />
                    </Route>
                    <Route path="/lesson2/zones">
                        <ViewZone1 />
                    </Route>
                    <Route path="/lesson5/zones">
                        <ViewZone2 />
                    </Route>
                    <Route path="/">
                        <Meridians />
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
};
export default withRouter(Menu);
