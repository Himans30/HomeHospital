import { useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router';
import Profile from '../profile';
import Login from './login';
import Register from './register';
import listEquipments from './listEquipments';
import ListEquipments from './listEquipments';
import ListStaff from './liststaff';
import EquipmentDetails from './equipmentDetails';
import ServiceForm from './serviceform';
import ForgotPassword from './forgotpassword';
import Checkout from './checkout';

const drawerWidth = 240;

const MainComponent = () => {

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

            <Switch>
                <Route exact path="/app">
                    <Redirect to="/app/login" />
                </Route>
                <Route path={`${path}/login`} component={Login} />
                <Route path={`${path}/register`} component={Register} />
                <Route path={`${path}/listequipments`} component={ListEquipments} />
                <Route path={`${path}/equipmentdetails/:id`} component={EquipmentDetails} />
                <Route path={`${path}/checkout`} component={Checkout} />
                <Route path={`${path}/liststaff`} component={ListStaff} />
                <Route path={`${path}/reset`} component={ForgotPassword} />
            </Switch>
        </div>
    )
}


export default MainComponent;