import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import { resquestResponse } from "./models/resquestResponse";
import { getDatas } from "./api/entity";
import { Meta } from "./models/meta";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Account from "./components/Account/Account";
import PrivateRoute from "./guard/PrivateRoute/PrivateRoute";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import NotificationComponent from "./components/NotificationComponent/NotificationComponent";
import PageComponent from "./pages/PageComponent/PageComponent";
import Error from "./pages/Error/Error";
import Compare from "./pages/Compare/Compare";
import WishList from "./pages/WishList/WishList";
import OrderCompleted from "./pages/OrderCompleted/OrderCompleted";

function App() {
  const [metas, setMetas] = useState<Meta[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      const data: resquestResponse = await getDatas("meta");
      console.log(data);

      if (data.isSuccess) {
        const results: Meta[] = data.results as Meta[];
        setMetas(results);
      }

      // setLoading(false);
    };
    runLocalData();
  }, []);

  return (
    <BrowserRouter>
      <Header metas={metas} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/stripe-payment-success" element={<OrderCompleted />} />
        <Route path="/paypal-payment-success" element={<OrderCompleted />} />
        <Route path="/product/:slug" element={<SingleProduct />} />
        <Route path="/page/:slug" element={<PageComponent />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer metas={metas} />
      <NotificationComponent />
    </BrowserRouter>
  );
}

export default App;
