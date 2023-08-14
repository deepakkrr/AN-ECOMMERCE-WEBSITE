import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Component/Product";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Dashboard from "./Component/Dashboard";

import Layout from "./Component/Layout";
import Cartilogy from "./Component/Cartilogy";


const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path="/cart" element={<Cartilogy />} />
  </Route>
))

function App() {
  return (
    <>
      <div className="App">
       <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
