import React,{lazy,Suspense} from 'react';
import { Route, Switch,useLocation } from 'react-router-dom';
import { Checkout } from './components/checkout/Checkout';
import Header from './components/Header';
import * as ROUTES from './constants/routes';
import { Payment } from './Pages/Payment';
import { AnimatePresence } from 'framer-motion';

const HomePage = lazy(() => import("./Pages/Homepage"));

function App() {
  const location = useLocation()
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-7xl font-bold">Loading...</h1>
          </div>
        }
      >
        <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path={ROUTES.HOMEPAGE}>
            <HomePage />
          </Route>
          <Route exact path={ROUTES.CHECKOUT}>
            <Checkout/>
          </Route>
          <Route exact path={ROUTES.PAYMENT}>
            <Payment/>
          </Route>
        </Switch>
      </AnimatePresence>
      </Suspense>
      </>
  );
}

export default App;
