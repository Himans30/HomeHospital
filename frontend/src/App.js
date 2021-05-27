import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import Admin from './components/admin';
import ManageUser from './components/admin/manageuser';
import UserDashboard from './components/user';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MainComponent from './components/main';
import { EquipmentProvider } from './providers/equipmentContext';
import { StaffProvider } from './providers/staffContext';
import Home from './components/home';
import Checkout from './components/checkout';

function App() {

  const stripe = loadStripe(
    "pk_test_51Ipo7TSDDpZ34k6P9IaeHYV7pWYXIAgKvLW69GubrVnlAzqOJw9gmLUIrpltZ7sIxwCty7bCeVtmvm3L074TyX26009MOlwjs1"
  );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
    transitions: {
      duration: {
        shortest: 100,
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Elements stripe={stripe}>
        <Router>
          <UserProvider>

            <EquipmentProvider>
              <StaffProvider>
                <Route exact path="/">
                  <Redirect to="/app" />
                </Route>

                <Route path="/admin/manageuser">
                  <ManageUser />
                </Route>

                <Route path="/admin">
                  <Admin />
                </Route>

                <Route path="/app">
                  <MainComponent />
                </Route>

                <Route path="/user">
                  <UserDashboard />
                </Route>

                <Route path="/checkout">
                  <Checkout />
                </Route>

                <Route path="/home">
                  <Home />
                </Route>
              </StaffProvider>
            </EquipmentProvider>

          </UserProvider>
        </Router>

      </Elements>
    </ThemeProvider>
  );
}

export default App;