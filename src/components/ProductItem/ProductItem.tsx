/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/05/2025 15:58:31
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./ProductItem.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { Product } from "../../models/products";
import { reductionRate, formatPrice, generateId } from "../../helpers/utils";
import { useDispatch } from "react-redux";
import {
  ADD_NOTIFICATION,
  ADD_TO_CART,
  ADD_TO_STORAGE,
} from "../../redux/actions/actionType";
import ModalQuickWiew from "../ModalQuickWiew/ModalQuickWiew";
interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const [isQuickView, setIsQuickView] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    // window.scrollTo(0, 0);
    const runLocalData = async () => {
      setLoading(false);
    };
    runLocalData();
  }, []);
  // ========================
  const addToCart = (e: any) => {
    e.preventDefault();
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
        message: product.name + " added to cart",
        status: "success",
        timeout: 4000,
      },
    });
  };

  // ========================
  const addToWishList = (e: any) => {
    e.preventDefault();
    dispatch({
      type: ADD_TO_STORAGE,
      key: "wishlists",
      payload: product,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateId(),
        message: product.name + " added to wish list",
        status: "success",
        timeout: 4000,
      },
    });
  };
  // ========================
  const addToCompare = (e: any) => {
    e.preventDefault();
    dispatch({
      type: ADD_TO_STORAGE,
      key: "comparelists",
      payload: product,
    });
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateId(),
        message: product.name + " added to compare list",
        status: "success",
        timeout: 4000,
      },
    });
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="ProductItem">
          {/* =============================== */}
          <div className="product">
            {isQuickView ? (
              <ModalQuickWiew
                product={product}
                close={() => setIsQuickView(false)}
              />
            ) : null}
            <div className="product_img">
              <Link to={"/product/" + product.slug}>
                <img alt="product_img1" src={product.imageUrls[0]} />
              </Link>
              <div className="product_action_box">
                <ul className="list_none pr_action_btn">
                  <li className="add-to-cart">
                    <a
                      onClick={addToCart}
                      // href="#"
                    >
                      <i className="icon-basket-loaded"></i>
                      Add To Cart
                    </a>
                  </li>
                  <li>
                    <a
                      // href="#"
                      className="popup-ajax"
                      onClick={addToCompare}
                    >
                      <i className="icon-shuffle"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="#"
                      onClick={() => setIsQuickView(!isQuickView)}
                      className="popup-ajax"
                    >
                      <i className="icon-magnifier-add"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      // href="#"
                      onClick={addToWishList}
                    >
                      <i className="icon-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product_info">
              <h6 className="product_title">
                <Link to={"/product/" + product.slug}>{product.name}</Link>
              </h6>
              <div className="product_price">
                <span className="price">
                  {formatPrice(product?.solde_price)}
                </span>
                <del>{formatPrice(product?.regular_price)}</del>
                <div className="on_sale">
                  <span>{reductionRate(product)}% Off</span>
                </div>
              </div>
              <div className="rating_wrap">
                <div className="rating">
                  <div className="product_rate" style={{ width: "80%" }}></div>
                </div>
                <span className="rating_num">(21)</span>
              </div>
              <div className="pr_desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus blandit massa enim. Nullam id varius nunc id varius
                  nunc.
                </p>
              </div>
              <div className="pr_switch_wrap">
                <div className="product_color_switch">
                  <span data-color="#87554B" className="active"></span>
                  <span data-color="#333333"></span>
                  <span data-color="#DA323F"></span>
                </div>
              </div>
            </div>
          </div>
          {/* =============================== */}
        </div>
      )}
    </Fragment>
  );
};

export default ProductItem;
