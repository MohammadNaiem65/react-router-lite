import React, { Children } from "react";
import Error from "./error";
import useRouteContext from "./hooks/useRouteContext";
import Route from "./route";

export default function Routes({ children }) {
  const { currentPath } = useRouteContext();

  // Create a list of all children routes
  const routes = Children.toArray(children);

  // Find the route that matches the current path
  const matchedRoute = routes.find((route) => {
    console.log("route path", route.props.path);
    console.log("current path", currentPath);
    return (
      React.isValidElement(route) &&
      route.type === Route &&
      route.props.path === currentPath
    );
  });

  return matchedRoute ? matchedRoute.props.children : <Error />;
}
