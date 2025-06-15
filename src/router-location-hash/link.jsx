import useRouteContext from "./hooks/useRouteContext";

/**
 * A special version of the `<a>` element that handles client-side routing using
 * the `#` hash fragment. When clicked, it will update the current path state
 * using the `navigate` function from the `RouterContext` and prevent the default
 * link behavior.
 *
 * @param {{ to: string }} props
 * @prop {string} to The path to navigate to when the link is clicked.
 * @prop {*} [props] Any other props will be passed down to the underlying `<a>`
 * element.
 *
 * @example
 * <Link to="/about">About</Link>
 */
export default function Link({ to, children, ...props }) {
  const { navigate } = useRouteContext();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    // The href should be a hash link for Single Page behavior
    <a href={`#${to}`} onClick={handleNavigate} {...props}>
      {children}
    </a>
  );
}
