import { RoutesType } from "general";
import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./helper";

const RouteComponent: FC = () => (
  <Router>
    <Routes>
      {routes.map(({ path, Component }: RoutesType) => (
        <Route path={path} element={<Component />} />
      ))}
    </Routes>
  </Router>
);

export default RouteComponent;
