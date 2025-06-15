import { useEffect } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Link, Route, Routes } from "./router-location-hash";

function App() {
  useEffect(() => {
    console.log(window.location.hash);
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Simple React Router
        </h1>

        {/* Navigation Menu */}
        <nav className="mb-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                to="/" // Link to the root path (will become #/)
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-blue-50"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about" // Link to /about (will become #/about)
                className="text-lg font-medium text-gray-700 hover:text-green-600 transition duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-green-50"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact" // Link to /contact (will become #/contact)
                className="text-lg font-medium text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-purple-50"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/non-existent" // Link to a non-existent path
                className="text-lg font-medium text-gray-700 hover:text-gray-600 transition duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Non-Existent Page
              </Link>
            </li>
          </ul>
        </nav>

        {/* Use the new Routes component to manage route matching and fallback */}
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* The NotFoundPage is rendered by default if no other route matches */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
