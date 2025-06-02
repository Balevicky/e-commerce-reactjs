/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2025 17:58:08
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  // const [state, setState] = useState<any>(null)
  // const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    // window.scrollTo(0, 0);
    const runLocalData = async () => {
      // setLoading(false);
    };
    runLocalData();
  }, [value]);

  return (
    <div className="Home">
      <Main />
    </div>
  );
};

export default Home;
