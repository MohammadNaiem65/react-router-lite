import { useEffect, useState } from "react";
import { RouterContext } from "../contexts";

export default function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState("/");

  /**
   * Navigate to a new path by updating the window.location.hash property.
   * @param {string} path The new path to navigate to.
   */
  const navigate = (path) => {
    window.location.hash = path;
  };

  useEffect(() => {
    /**
     * Updates the current path state based on the current hash in the URL.
     * Removes the leading '#' from the hash to get the path.
     */
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
