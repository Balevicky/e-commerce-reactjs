/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 02/06/2025 11:24:53
*/
import React, { FC, useEffect, useState } from "react";
import "./ModalQuickWiew.css";
import { Product } from "../../models/products";
import {
  formatPrice,
  generateId,
  reductionRate,
  sonoreEffet,
} from "../../helpers/utils";
import { dir } from "console";
import {
  ADD_NOTIFICATION,
  ADD_TO_CART,
  ADD_TO_STORAGE,
} from "../../redux/actions/actionType";
import { useDispatch } from "react-redux";

interface ModalQuickWiewProps {
  product: Product;
  close: () => void;
}
const ModalQuickWiew: FC<ModalQuickWiewProps> = ({ product, close }) => {
  const [currentImage, setCurrentImage] = useState<string>(
    product.imageUrls[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  useEffect(() => {
    // window.scrollTo(0,0)
    const runLocalData = async () => {
      // permet de gerer les image de la classe ".slick_slider"
      const $ = (window as any).jQuery;
      $(".slick_slider").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      });
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
        quantity: quantity,
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

  // ==============================
  const handleSetQantity = (step: number) => {
    if ((step = 1)) {
      sonoreEffet("success");
      console.log(step);
    } else {
      sonoreEffet("danger");
    }
    if (quantity + step >= 1) {
      setQuantity(quantity + step);
    }
  };

  return (
    <div className="ModalQuickWiew">
      ModalQuickWiew Component
      {/* ============================ */}
      <div className="ModalQuickView">
        <div className="mfp-bg mfp-ready" />
        <div
          className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
          style={{ overflow: "hidden auto;" }}
        >
          <div className="mfp-container mfp-ajax-holder mfp-s-ready">
            <div className="mfp-content">
              <div className="ajax_quick_view">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                    <div className="product-image">
                      <div className="product_img_box">
                        <img
                          id="product_img"
                          src={currentImage}
                          data-zoom-image={currentImage}
                          alt="product_img1"
                        />
                      </div>
                      <div
                        id="pr_item_gallery"
                        className="product_gallery_item slick_slider"
                        data-slides-to-show={4}
                        data-slides-to-scroll={1}
                        data-infinite="false"
                      >
                        {product.imageUrls.map(
                          (imageurl: string, index: number) => {
                            return (
                              <div className="item " key={index}>
                                <a
                                  // href="#"
                                  className="product_gallery_item active"
                                  onClick={() => setCurrentImage(imageurl)}
                                  data-image={imageurl}
                                  data-zoom-image={imageurl}
                                >
                                  <img
                                    src={imageurl}
                                    alt="product_small_img1"
                                  />
                                </a>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {/* ======================= */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="pr_detail">
                      <span className="btn btn-close" onClick={close}></span>
                      <div className="product_description">
                        <h4 className="product_title">
                          <a href="#">{product.name}</a>
                        </h4>
                        <div className="product_price">
                          <span className="price">
                            {formatPrice(product.solde_price)}
                          </span>
                          <del>{formatPrice(product.regular_price)}</del>
                          <div className="on_sale">
                            <span>{reductionRate(product)} % Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>{product.description}</p>
                        </div>
                        <div className="product_sort_info">
                          <ul>
                            <li>
                              <i className="linearicons-shield-check" /> 1 Year
                              AL Jazeera Brand Warranty
                            </li>
                            <li>
                              <i className="linearicons-sync" /> 30 Day Return
                              Policy
                            </li>
                            <li>
                              <i className="linearicons-bag-dollar" /> Cash on
                              Delivery available
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <div className="cart_extra">
                        <div className="cart-product-quantity">
                          <div className="quantity">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                              onClick={() => handleSetQantity(-1)}
                            />
                            <input
                              type="text"
                              name="quantity"
                              onChange={() => handleSetQantity(quantity)}
                              value={quantity}
                              title="Qty"
                              className="qty"
                              size={4}
                            />
                            <input
                              type="button"
                              value="+"
                              className="plus"
                              onClick={() => handleSetQantity(1)}
                            />
                          </div>
                        </div>
                        <div className="cart_btn">
                          <button
                            className="btn btn-fill-out btn-addtocart"
                            type="button"
                            onClick={addToCart}
                          >
                            <i className="icon-basket-loaded" /> Add to cart
                          </button>
                          <a
                            className="add_compare"
                            // href="#"
                            onClick={addToCompare}
                          >
                            <i className="icon-shuffle" />
                          </a>
                          <a
                            className="add_wishlist"
                            // href="#"
                            onClick={addToWishList}
                          >
                            <i className="icon-heart" />
                          </a>
                        </div>
                      </div>
                      <hr />
                      <ul className="product-meta">
                        <li>
                          SKU: <a href="#">BE45VGRT</a>
                        </li>
                        <li>
                          Category: <a href="#">Clothing</a>
                        </li>
                        <li>
                          Tags:{" "}
                          <a href="#" rel="tag">
                            Cloth
                          </a>
                          ,{" "}
                          <a href="#" rel="tag">
                            printed
                          </a>{" "}
                        </li>
                      </ul>
                      <div className="product_share">
                        <span>Share:</span>
                        <ul className="social_icons">
                          <li>
                            <a href="#">
                              <i className="ion-social-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-googleplus" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-youtube-outline" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ion-social-instagram-outline" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ */}
    </div>
  );
};

export default ModalQuickWiew;
