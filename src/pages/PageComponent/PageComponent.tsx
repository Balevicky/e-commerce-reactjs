/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 31/05/2025 10:38:37
*/
import React, { FC, useEffect, useState } from "react";
// import Loading from '../Loading/Loading';
import "./PageComponent.css";
import PageBanner from "../../components/PageBanner/PageBanner";
import { Navigate, useParams } from "react-router-dom";
import { getDatasBySlug } from "../../api/entity";
import Loading from "../../components/Loading/Loading";
import { resquestResponse } from "../../models/resquestResponse";
import { Page } from "../../models/page";

interface PageComponentProps {}

const PageComponent: FC<PageComponentProps> = () => {
  // const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<Page | null>(null);
  const [error, setError] = useState<boolean>(false);
  let { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      if (slug) {
        const data: resquestResponse = await getDatasBySlug("page", slug);
        if (data.isSuccess) {
          setPage(data.result);
          setLoading(false);
        } else {
          setError(true);
        }
      }
    };
    runLocalData();
  }, [slug]);

  if (!slug) {
    return <Navigate to="/error" />;
  }
  if (error) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="Page">
      {!loading && page ? (
        <>
          <PageBanner name={page!.name} />
          <div
            className="container text-justify"
            dangerouslySetInnerHTML={{ __html: page?.content }}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PageComponent;
