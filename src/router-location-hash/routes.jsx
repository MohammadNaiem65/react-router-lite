import React, { Children } from "react";
import Error from "./error";
import useRouteContext from "./hooks/useRouteContext";
import Route from "./route";

/**
 * A component that renders the appropriate route based on the current path.
 * @param {{ children: React.ReactNode }} props
 * @prop {ReactNode} children The children routes. Each child should be a `Route`
 * component.
 *
 * @example
 * <Routes>
 *   <Route path="/">
 *     <Home />
 *   </Route>
 *   <Route path="/about">
 *     <About />
 *   </Route>
 * </Routes>
 */
export default function Routes({ children }) {
  const { currentPath } = useRouteContext();

  // Create a list of all children routes
  const routes = Children.toArray(children);

  // Find the route that matches the current path
  const matchedRoute = routes.find(
    (route) =>
      React.isValidElement(route) &&
      route.type === Route &&
      route.props.path === currentPath
  );

  // Render the matched route or an error message
  return matchedRoute ? matchedRoute.props.children : <Error />;
}
