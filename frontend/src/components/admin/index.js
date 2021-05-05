import { useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Route, BrowserRouter as Router, useRouteMatch, Switch, Link, Redirect } from 'react-router-dom';
import ManageUser from './manageuser';
import AdminDashboard from './dashboard';
import Profile from '../profile';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import AddEquipment from './addequipment';
import AddStaff from './addstaff';

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

const Admin = () => {

    const [open, setOpen] = useState(true);

    const classes = useStyles();

    let { path, url } = useRouteMatch();
    console.log(path)

    const drawerOptions = [
        {
            name: "Profile",
            icon: <AccountBoxIcon />,
            link: `${url}/profile`
        },
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            link: `${url}/dashboard`
        },
        {
            name: "ManageUsers",
            icon: <PeopleIcon />,
            link: "/admin/manageusers"
        },
        {
            name: "AddEquipment",
            icon: <PeopleIcon />,
            link: "/admin/manageequipment"
        },
        {
            name: "AddStaff",
            icon: <PeopleIcon />,
            link: "/admin/managestaff"
        }
    ]

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
                    <Route path={`${path}/dashboard`} component={AdminDashboard} />
                    <Route path={`${path}/manageuser`} component={ManageUser} />
                    <Route path={`${path}/manageequipment`} component={AddEquipment} />
                    <Route path={`${path}/managestaff`} component={AddEquipment} />

                </Switch>

            </div>
        </div>
    )
}


export default Admin;