import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Products from "./pages/Products";
import NavBar from "./components/NavBar";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<Dasboard />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<ViewProduct />} path="/product/:id" />
      </Routes>
    </div>
  );
}

export default App;
