import { useEffect, useState } from "react";
import { RouterContext } from "../contexts";

export default function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState("/");

  const navigate = (path) => {
    window.location.hash = path;
  };

  useEffect(() => {
    const handleUpdatePath = () => {
      const path = window.location.hash.slice(1);

      setCurrentPath(path);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleUpdatePath);

    return () => {
      window.removeEventListener("hashchange", handleUpdatePath);
    };
  }, []);
  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
