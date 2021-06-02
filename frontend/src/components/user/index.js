import { useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router';
import Profile from '../profile';
import ManageUserOrders from './manageUserOrders';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 60,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 230,
    },
}));

const UserDashboard = () => {

    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let { path, url } = useRouteMatch();

    const drawerOptions = [
        {
            name: "Profile",
            icon: <AccountBoxIcon />,
            link: `${url}/profile`
        },
        {
            name: "Manage Orders",
            icon: <AccountBoxIcon />,
            link: `${url}/manageorder`
        },
        {
            name: "Manage Services",
            icon: <AccountBoxIcon />,
            link: `${url}/services`
        },
        {
            name: "Current Rents",
            icon: <AccountBoxIcon />,
            link: `${url}/rents`
        },
    ]

    return (
        <div>
            <Header open={open} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} drawer={true} />
            <DrawerComponent
                open={open}
                setOpen={setOpen}
                drawerWidth={drawerWidth}
                handleDrawerClose={handleDrawerClose}
                drawerOptions={drawerOptions} />


            <div className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <Switch>
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/manageorder`} component={ManageUserOrders} />

                    <Redirect exact path={`${path}/dashboard`} to={`${path}/profile`}>
                    </Redirect>
                </Switch>
            </div>
        </div>
    )
}


export default UserDashboard;