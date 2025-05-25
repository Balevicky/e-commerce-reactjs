/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2025 18:06:45
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./About.css";
import Loading from "../../components/Loading/Loading";

interface AboutProps {}

const About: FC<AboutProps> = () => {
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
    // <Fragment>
    //   {loading ? <Loading /> : <div className="About">About Component</div>}
    // </Fragment>
    // ==============================
    <Fragment>
      <div className="Main">Component About</div>
    </Fragment>
    // ==============================
  );
};

export default About;
