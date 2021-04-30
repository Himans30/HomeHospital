import { useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route } from 'react-router';
import Profile from '../profile';

const drawerWidth = 240;

const UserDashboard = () => {

    const [open, setOpen] = useState(false);

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
        }
    ]

    return (
        <div>
            <Header open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} />
            <DrawerComponent open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} drawerOptions={drawerOptions} />

            <Switch>
                <Route path={`${path}/profile`} component={Profile} />
                <Route exact path={`${path}`}>
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}


export default UserDashboard;