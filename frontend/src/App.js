import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { UserProvider } from "./providers/userContext";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import Admin from './components/admin';
import UserDashboard from './components/user';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MainComponent from './components/main';
import { EquipmentProvider } from './providers/equipmentContext';
import { StaffProvider } from './providers/staffContext';
import Home from './components/home';
import { OrderProvider } from './providers/orderContext';
import { NursingProvider } from './providers/nursingContext';

function App() {

  const stripe = loadStripe(
    "pk_test_Vmvhpm2TASsGcgF4RcyQfkF000KwucQJR1"
  );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[700],
        color: 'white'
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
              <NursingProvider>
                <Route exact path="/">
                  <Redirect to="/app" />
                </Route>

                <OrderProvider>
                  <Route path="/user">
                    <UserDashboard />
                  </Route>

                  <Route path="/admin">
                    <Admin />
                  </Route>

                  <Route path="/app">
                    <MainComponent />
                  </Route>

                </OrderProvider>

                <Route path="/home">
                  <Home />
                </Route>
              </NursingProvider>
            </EquipmentProvider>

          </UserProvider>
        </Router>

      </Elements>
    </ThemeProvider>
  );
}

export default App;