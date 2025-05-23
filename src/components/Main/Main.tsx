/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/05/2025 11:53:46
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./Main.css";
import Loading from "../Loading/Loading";
import Slider from "../Slider/Slider";
import Collection from "../Collection/Collection";
import Exclusive from "../Exclusive/Exclusive";

interface MainProps {}

const Main: FC<MainProps> = () => {
  // const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      setLoading(false);
    };
    runLocalData();
  }, [value]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="Main">
          <Slider />
          <div className="main_content">
            <Collection />
            <Exclusive />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Main;
