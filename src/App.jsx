import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Products from "./pages/products/Products";
import NavBar from "./components/NavBar";
import ViewProduct from "./pages/viewProduct/ViewProduct";
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
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ConnectionAwaiter from "./components/ConnectionAwaiter";
import AdminLayout from "./components/adminLayout/AdminLayout";
import SideBarContainer from "./components/adminLayout/SideBarContainer";
import ContentContainer from "./components/adminLayout/ContentContainer";
import SideBar from "./components/AdminSidebar/SideBar";
import PublicRoutes from "./components/authenticationComps/PublicRoutes";
import ViewAllCategories from "./pages/category/ViewAllCategories";
import ViewAllTags from "./pages/tag/ViewAllTags";

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
   {/*    <ConnectionAwaiter /> */}
      <div className="d-flex flex-column min-vh-100">
        <AuthProvider>
          <NavBar />
          <div className="flex-grow-1">
            <Routes>
              <Route element={<Dasboard shouldFocus={true} />} path="/" />

              <Route element={<Products />} path="/products" />
              <Route element={<AboutUs />} path="/about-us" />
              <Route element={<ContactUs />} path="/contact-us" />
              <Route element={<ViewProduct />} path="/product/:id" />
              <Route element={<PublicRoutes />}>
                <Route element={<Register />} path="/register" />
                <Route element={<Login />} path="/login" />
              </Route>
              <Route element={<RequireAuth />}>
                <Route element={<AdminLayout />}>
                  <Route element={<ContentContainer />}>
                    <Route element={<AddProduct componentName={"Add Product"} />} path="/add-product" />
                    <Route element={<AddProduct componentName={"Edit Product"} isEdit={true} />} path="/edit-product/:id" />
                    <Route element={<AddCategory componentName={"Add Category"}/>} path="/add-category" />
                    <Route element={<AddCategory componentName={"Edit Category"} isEdit={true}/>} path="/edit-category/:id" />
                    <Route element={<AddBrand componentName={"Add Brand"} />} path="/add-brand" />
                    <Route element={<AddBrand componentName={"Edit Brand"} isEdit={true} />} path="/edit-brand/:id" />
                    <Route element={<AddTag componentName={"Add Tag"} />} path="/add-tag" />
                    <Route element={<AddTag componentName={"Edit Tag"} isEdit={true}/>} path="/edit-tag/:id" />
                    <Route element={<ViewAllBrands />} path="/all-brands" />
                    <Route element={<ViewAllProducts />} path="/all-products" />
                    <Route element={<ViewAllCategories />} path="/admin/category/view-all" />
                    <Route element={<ViewAllTags />} path="/admin/tag/view-all" />
                  </Route>
                </Route>
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </div>
      <ScrollToTop />
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
