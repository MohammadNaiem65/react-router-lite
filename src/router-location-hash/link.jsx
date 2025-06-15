import useRouteContext from "./hooks/useRouteContext";

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
