/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2025 18:05:29
*/
import React, { FC, useEffect } from 'react';
import './Loading.css';


interface LoadingProps {
 
}


const Loading : FC<LoadingProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Loading">
          Loading Component
      </div>
  );
}

export default Loading;