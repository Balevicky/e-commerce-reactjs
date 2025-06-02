/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2025 16:12:09
*/
import React, { FC, useEffect } from "react";
import "./WishList.css";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useDispatch, useSelector } from "react-redux";
import { getWishListe } from "../../redux/selectors/selectors";
import { Product } from "../../models/products";
import { formatPrice, generateId } from "../../helpers/utils";
import { Navigate } from "react-router-dom";
import {
  ADD_NOTIFICATION,
  ADD_TO_CART,
  REMOVE_FROM_STORAGE,
} from "../../redux/actions/actionType";


interface WishListProps {}

const WishList: FC<WishListProps> = () => {
  const dispatch = useDispatch();
  const wishlists = useSelector(getWishListe);
  console.log(wishlists);

  useEffect(() => {
    // window.scrollTo(0, 0);
    const runLocalData = async () => {
      console.log(wishlists);
    };
    runLocalData();
  }, [wishlists]);

  const addToCart = (event: any, product: Product) => {
    event.preventDefault();
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
        quantity: 1,
        sub_total: product.solde_price,
      },
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateId(),
        message: product.name + " added to cart !",
        status: "success",
        timeout: 2000,
      },
    });
  };
  const removeFromWishList = (event: any, product: Product) => {
    event.preventDefault();
    dispatch({
      type: REMOVE_FROM_STORAGE,
      key: "wishlists",
      payload: product,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateId(),
        message: product.name + " removed from wish list !",
        status: "danger",
        timeout: 2000,
      },
    });
  };

  if (!wishlists?.length) {
    return <Navigate to="/" />;
  }

  // =======================
  return (
    <div className="WishList">
      <PageBanner name="Wish List" />
      {/* WishList Component */}
      {/* =========================== */}
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive wishlist_table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-stock-status">Stock Status</th>
                        <th className="product-add-to-cart"></th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlists.map((wish: Product) => {
                        return (
                          <tr key={wish._id}>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img
                                  width="50"
                                  height="50"
                                  alt="product1"
                                  src={wish.imageUrls[0]}
                                />
                              </a>
                            </td>
                            <td data-title="Product" className="product-name">
                              <a href="#">{wish.name}</a>
                            </td>
                            <td data-title="Price" className="product-price">
                              {formatPrice(wish.solde_price)}
                            </td>
                            <td
                              data-title="Stock Status"
                              className="product-stock-status"
                            >
                              <span className="  product-price">
                                {/* <span className="badge badge-pill badge-success  product-price"> */}
                                {Intl.NumberFormat().format(wish.stock)}
                                {/* console.log({wish.stock}); */}
                              </span>
                            </td>
                            <td className="product-add-to-cart">
                              <a
                                onClick={(event) => addToCart(event, wish)}
                                href="#"
                                className="btn btn-fill-out"
                              >
                                <i className="icon-basket-loaded"></i> Add to
                                Cart
                              </a>
                            </td>
                            <td data-title="Remove" className="product-remove">
                              <a
                                href="#"
                                onClick={(event) =>
                                  removeFromWishList(event, wish)
                                }
                              >
                                <i className="ti-close"></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================== */}
    </div>
  );
};

export default WishList;
