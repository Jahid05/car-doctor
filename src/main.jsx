import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";
import Context, { AuthContext } from "./components/Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </React.StrictMode>
  </div>
);
