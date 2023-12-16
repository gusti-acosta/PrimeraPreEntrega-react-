import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBarComponent } from "../components";
import { ItemDetailContainer } from "../pages";
import Category from "../pages/Category";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjM_YzTGasfiII537PTofGyrn_xoxYuOA",
  authDomain: "entrega-final-gustavo.firebaseapp.com",
  projectId: "entrega-final-gustavo",
  storageBucket: "entrega-final-gustavo.appspot.com",
  messagingSenderId: "219949686620",
  appId: "1:219949686620:web:2e55c4707c93c93406eb99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

