/**
 * A special component that can be used to define a route.
 * @param {{ path: string, children: React.ReactNode }} props
 * @prop {string} path The path to match for this route.
 * @prop {ReactNode} children The route component to render if the path matches.
 * @example
 * <Route path="/contact">
 *   <Contact />
 * </Route>
 */
export default function Route({ path, children }) {
  return children;
}
