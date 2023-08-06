import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Products from "./pages/products/Products";
import NavBar from "./components/NavBar";
import ViewProduct from "./pages/ViewProduct";
import AddProduct from "./pages/addProduct/AddProduct";
import SplitScreen from "./pages/splitScreen/SplitScreen";
import LeftHandComponent from "./pages/splitScreen/LeftHandComponent";
import RightHandComponent from "./pages/splitScreen/RightHandComponent";
import RegularList from "./pages/listItems/RegularList";
import SmallPersonListItem from "./pages/listItems/people/SmallPersonListItem";
import LargePersonListItem from "./pages/listItems/people/LargePersonListItem";
import Modal from "./pages/modal/Modal";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./components/authenticationComps/auth";
import RequireAuth from "./components/authenticationComps/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategory from "./pages/addProduct/AddCategory";
import AddBrand from "./pages/addProduct/AddBrand";
import AddTag from "./pages/addProduct/AddTag";
import Footer from "./components/Footer";
import ViewAllBrands from "./pages/brand/ViewAllBrands";
import ViewAllProducts from "./pages/ViewAllProducts";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];
function App() {
  return (
    <div className="App">
      <div className="app-wrapper d-flex flex-column min-vh-100">
        <AuthProvider>
          <NavBar />
          <div className="flex-grow-1">
            <Routes>
              <Route element={<Dasboard shouldFocus={true} />} path="/" />
              <Route element={<Register />} path="/register" />
              <Route element={<Login />} path="/login" />
              <Route element={<Products />} path="/products" />

              <Route element={<ViewProduct />} path="/product/:id" />

              <Route element={<RequireAuth />}>
                <Route element={<AddProduct componentName={"Add Product"} />} path="/add-product" />
                <Route element={<AddProduct componentName={"Edit Product"} isEdit={true} />} path="/edit-product/:id" />
                <Route element={<AddCategory />} path="/add-category" />
                <Route element={<AddBrand componentName={"Add Brand"} />} path="/add-brand" />
                <Route element={<AddBrand componentName={"Edit Brand"} isEdit={true} />} path="/edit-brand/:id" />
                <Route element={<AddTag />} path="/add-tag" />
                <Route element={<ViewAllBrands />} path="/all-brands" />
                <Route element={<ViewAllProducts />} path="/all-products" />
              </Route>
              <Route
                element={
                  <SplitScreen leftWeight={1} rightWeight={3}>
                    <LeftHandComponent name={"lochana"} />
                    <RightHandComponent message={"Hello"} />
                  </SplitScreen>
                }
                path="/split-screen"
              />
              <Route element={<RegularList items={people} resourceName={"person"} itemComponent={SmallPersonListItem} />} path="/list-small" />
              <Route element={<RegularList items={people} resourceName={"person"} itemComponent={LargePersonListItem} />} path="/list-large" />
              <Route
                element={
                  <Modal>
                    <SmallPersonListItem person={people} />
                  </Modal>
                }
                path="/modal"
              />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
