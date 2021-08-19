import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./contexts";

import * as R from "./pages";

const Routes = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("user"));
    setUser(response);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {user?.name ? (
          <>
            <Route exact path="/home" component={R.HomeEntrepreneur} />
            <Route exact path="/schedules/:id" component={R.SchedulesDetails} />
            <Route exact path="/schedules" component={R.Schedules} />
            <Route exact path="/faq" component={R.Faq} />
            <Route exact path="/request-collect" component={R.RequestCollect} />
            <Route exact path="/cancelled" component={R.Cancelled} />
            <Route exact path="/collect-confirm" component={R.CollectConfirm} />
            <Route exact path="/profile" component={R.Profile} />
            <Route
              exact
              path="/collect-cancelled"
              component={R.CollectCancelled}
            />

            <Redirect to="/home" />
          </>
        ) : (
          <>
            <Route exact path="/" component={R.Home} />
            <Route exact path="/login" component={R.Login} />
            <Route exact path="/register" component={R.Register} />
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
