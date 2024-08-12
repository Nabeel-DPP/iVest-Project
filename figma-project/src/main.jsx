import React from 'react';
import App from './App';
import Layout from './layout/Layout';
// import "./index.css";
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      ],
  },
]);


// import './index.css'c:\Users\-N A B E E L\Desktop\Main Task Integration\react-project\src\components\layout

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>
);




// <React.StrictMode>

// <RouterProvider router={router} />
   

// </React.StrictMode>