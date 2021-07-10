import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import AppLayout from "@/components/layouts/appLayout";

const HomePage = React.lazy(() => import('@/pages/homePage'))

const AppRoutes = () => {
  return (
    <AppLayout>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </React.Suspense>
    </AppLayout>
  );
};

export default AppRoutes;
