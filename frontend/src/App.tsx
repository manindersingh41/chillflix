import React, {
  ReactComponentElement,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import SharedLayout from "./pages/dashboard/sharedLayout";
import Register from "./pages/register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useRoutes,
} from "react-router-dom";

const Profile = () => (
  <div
    style={{
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      fontSize: "50px",
      fontWeight: "800",
      height: "100vh",
    }}
  >
    Profile
  </div>
);
const Setting = () => (
  <div
    style={{
      backgroundColor: "green",
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      fontSize: "50px",
      fontWeight: "800",
      height: "100vh",
    }}
  >
    Setting
  </div>
);

const isSignedIn = false;
const ProtectedRoute: React.FC<any> = ({ isSignedIn, children }) => {
  if (!isSignedIn) {
    return <Navigate to="/register" replace />;
  }
  return children;
};

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isSignedIn={isSignedIn}>
          <SharedLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        { path: "setting", element: <Setting /> },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  console.log(element);
  return element;
};

export default App;
