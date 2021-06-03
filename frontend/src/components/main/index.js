import { useState } from 'react';
import Header from '../header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router';
import Login from './login';
import Register from './register';
import ListEquipments from './listEquipments';
import ListStaff from './liststaff';
import EquipmentDetails from './equipmentDetails';
import NursingForm from './nursingform';
import Checkout from './checkout';
import ForgotPassword from './forgotpassword';

const drawerWidth = 0;

const MainComponent = () => {

    const [open, setOpen] = useState(true);

    let { path, url } = useRouteMatch();

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

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
                <Route path={`${path}/nursingform`} component={NursingForm} />
            </Switch>
        </div>
    )
}


export default MainComponent;