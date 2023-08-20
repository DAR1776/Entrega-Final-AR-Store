import { initializeApp } from "firebase/app";

import{BrowserRouter, Routes, Route} from "react-router-dom";

import FirestoreProvider from "./context/Firestore/FirestoreProvider";
import CartProvider from "./context/Cart/CartProvider";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavbarContainer from "./components/Navbar Container";
import HoodiesGrises from "./pages/Grises";
import HoodiesNegros from "./pages/Negros";
import HoodiesBlancos from "./pages/Blancos";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";


const firebaseConfig = {
  apiKey: "AIzaSyBMxCchVm7eQFAWm-BAD-NuCy3-k0wSaOU",
  authDomain: "ar-store-project.firebaseapp.com",
  projectId: "ar-store-project",
  storageBucket: "ar-store-project.appspot.com",
  messagingSenderId: "148280051216",
  appId: "1:148280051216:web:53dab7cc43e1aaf0326c95"
};

initializeApp(firebaseConfig);

function App() {

  return (
    <FirestoreProvider>
      <CartProvider>
        <BrowserRouter>
          <NavbarContainer />

          <Routes>

            <Route 
              exact
              path="/"
              element={<Home/>}
            />

            <Route
              exact
              path="category/:categoria"
              element={<HoodiesGrises/>}
            />

            <Route
              exact
              path="category/:categoria"
              element={<HoodiesNegros/>}
            />

            <Route
              exact
              path="category/:categoria"
              element={<HoodiesBlancos/>}
            />

            <Route
              exact
              path="item/:id"
              element={<Detail/>}
            />

            <Route
              exact
              path="cart"
              element={<Cart/>}
            />

          </Routes>

          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </FirestoreProvider>
  )
}

export default App



