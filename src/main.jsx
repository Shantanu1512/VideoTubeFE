import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import {
  Login,
  Registration,
  Home,
  Sidepanel,
  Layout,
} from "./components/index.js";
import SearchBar from "./components/Header/SearchBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
      },
      {
        path: "/signup",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test",
        element: <Sidepanel />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
