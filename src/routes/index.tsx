/* eslint-disable react/function-component-definition */
import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./helper";

const RouteComponent: FC = () => (
  <Router>
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.component />} />
      ))}
    </Routes>
  </Router>
);

export default RouteComponent;
