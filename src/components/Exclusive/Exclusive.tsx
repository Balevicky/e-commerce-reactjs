/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/05/2025 13:19:48
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./Exclusive.css";
import Loading from "../Loading/Loading";
import { resquestResponse } from "../../models/resquestResponse";
import { searchDatas } from "../../api/entity";
import { Product } from "../../models/products";
import ProductItem from "../ProductItem/ProductItem";

interface ExclusiveProps {}

const Exclusive: FC<ExclusiveProps> = () => {
  const [products, setProducts] = useState<Array<Product[]>>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const result = [];
    let query = "isNewArrival=true";
    let productData: resquestResponse = await searchDatas(
      "product",
      query,
      1,
      8
    );
    console.log(productData);
    if (productData.isSuccess) {
      const currentProduct: Product[] = productData.results as Product[];
      result.push(currentProduct);
      console.log(currentProduct);
      console.log(result);
    }
    productData = await searchDatas("product", query, 1, 8);
    if (productData.isSuccess) {
      const currentProduct: Product[] = productData.results as Product[];
      result.push(currentProduct);
    }
    query = "isFeatured=true";
    productData = await searchDatas("product", query, 1, 8);
    if (productData.isSuccess) {
      const currentProduct: Product[] = productData.results as Product[];
      result.push(currentProduct);
    }
    query = "isSpecialOffer=true";
    productData = await searchDatas("product", query, 1, 8);
    if (productData.isSuccess) {
      const currentProduct: Product[] = productData.results as Product[];
      result.push(currentProduct);
    }

    setProducts(result);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      await getProducts();
      setLoading(false);
      console.log({ products });
    };
    runLocalData();
  }, [loading]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="Exclusive">
          <div className="section small_pt pb_70">
            <div className="container-lg ">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="heading_s1 text-center">
                    <h2>Exclusive Products</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="tab-style1">
                    <ul
                      role="tablist"
                      className="nav nav-tabs justify-content-center"
                    >
                      <li className="nav-item">
                        <a
                          id="arrival-tab"
                          data-bs-toggle="tab"
                          href="#arrival"
                          role="tab"
                          aria-controls="arrival"
                          aria-selected="true"
                          className="nav-link active"
                        >
                          New Arrival
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="sellers-tab"
                          data-bs-toggle="tab"
                          href="#sellers"
                          role="tab"
                          aria-controls="sellers"
                          aria-selected="false"
                          className="nav-link"
                        >
                          Best Sellers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="featured-tab"
                          data-bs-toggle="tab"
                          href="#featured"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="false"
                          className="nav-link"
                        >
                          Featured
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="special-tab"
                          data-bs-toggle="tab"
                          href="#special"
                          role="tab"
                          aria-controls="special"
                          aria-selected="false"
                          className="nav-link"
                        >
                          Special Offer
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      id="arrival"
                      role="tabpanel"
                      aria-labelledby="arrival-tab"
                      className="tab-pane fade show active"
                    >
                      <div className="row shop_container">
                        {products[0]?.length
                          ? products[0].map((product: Product) => {
                              return (
                                <div
                                  className="col-lg-3 col-md-4 col-6"
                                  key={product._id}
                                >
                                  <ProductItem
                                    product={product}
                                    // key={product._id}
                                  />
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                    <div
                      id="sellers"
                      role="tabpanel"
                      aria-labelledby="sellers-tab"
                      className="tab-pane fade"
                    >
                      <div className="row shop_container">
                        {/* ======================== */}
                        {products[1]?.length
                          ? products[1].map((product: Product) => {
                              return (
                                <div
                                  className="col-lg-3 col-md-4 col-6"
                                  key={product._id}
                                >
                                  <ProductItem
                                    product={product}
                                    // key={product._id}
                                  />
                                </div>
                              );
                            })
                          : null}
                        {/* ======================== */}
                      </div>
                    </div>
                    <div
                      id="featured"
                      role="tabpanel"
                      aria-labelledby="featured-tab"
                      className="tab-pane fade"
                    >
                      <div className="row shop_container">
                        {/* =============== */}
                        {products[2]?.length
                          ? products[2].map((product: Product) => {
                              return (
                                <div
                                  className="col-lg-3 col-md-4 col-6"
                                  key={product._id}
                                >
                                  <ProductItem
                                    product={product}
                                    // key={product._id}
                                  />
                                </div>
                              );
                            })
                          : null}
                        {/* =============== */}
                      </div>
                    </div>
                    <div
                      id="special"
                      role="tabpanel"
                      aria-labelledby="special-tab"
                      className="tab-pane fade"
                    >
                      <div className="row shop_container">
                        {products[3]?.length
                          ? products[3].map((product: Product) => {
                              return (
                                <div
                                  className="col-lg-3 col-md-4 col-6"
                                  key={product._id}
                                >
                                  <ProductItem
                                    product={product}
                                    // key={product._id}
                                  />
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Exclusive;
