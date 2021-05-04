import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, purple } from '@material-ui/core/colors';
import Admin from './components/admin';
import ManageUser from './components/admin/manageuser';
import UserDashboard from './components/user';
import Checkout from './components/checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MainComponent from './components/main';
import { EquipmentProvider } from './providers/equipmentContext';

const stripePromise = loadStripe("pk_test_Vmvhpm2TASsGcgF4RcyQfkF000KwucQJR1");

function App() {

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
      <Elements stripe={stripePromise}>
        <Router>
          <UserProvider>

            <EquipmentProvider>
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
            </EquipmentProvider>

          </UserProvider>
        </Router>

      </Elements>
    </ThemeProvider>
  );
}

export default App;