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
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer metas={metas} />
    </BrowserRouter>
  );
}

export default App;
