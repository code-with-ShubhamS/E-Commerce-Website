import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Main/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./Main/Bag.jsx";
import Home from "./Main/Home.jsx";
import {Provider} from "react-redux"
import store from "./store/index.js";
import SubmitOrder from "./components/SubmitOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path:"/",element:<Home/>},
      {path:"/Bag",element:<Bag/>}
    ]
  },
  {
   path:"/Bag/OrderPlaced",
   element:<SubmitOrder/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
