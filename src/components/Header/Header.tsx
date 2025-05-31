/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2025 18:04:02
*/
import React, { FC, useEffect, Fragment, useState } from "react";
import "./Header.css";
// import Loading from "../Loading/Loading";
import { Meta } from "../../models/meta";
import { getMetas, formatPrice } from "../../helpers/utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, getCart } from "../../redux/selectors/selectors";
import { LOGOUT, REMOVE_FROM_CART } from "../../redux/actions/actionType";
import { Product } from "../../models/products";
import { Article } from "../../models/article";
import { Page } from "../../models/page";
import { getDatasByPage, searchDatas } from "../../api/entity";
import { resquestResponse } from "../../models/resquestResponse";
import { Category } from "../../models/category";
import { MegaMenu } from "../../models/mega-menu";

interface HeaderProps {
  metas: Meta[];
}

const Header: FC<HeaderProps> = ({ metas }) => {
  // const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState<Page[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [megaMenu, setMegaMenu] = useState<MegaMenu[]>([]);
  const isAuth = useSelector(getAuthState);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const runLocalData = async () => {
      let query = "isTop=true";
      const data: resquestResponse = await searchDatas("page", query);
      if (data.isSuccess) {
        setPages(data.results as Page[]);
      }

      // =======================
      query = "isMega=true";
      const categoryData: resquestResponse = await searchDatas(
        "category",
        query,
        1,
        4
      );
      if (categoryData.isSuccess) {
        setCategories(categoryData.results as Category[]);
      }
      // =======================
      const megaCollectionData: resquestResponse = await getDatasByPage(
        "megaCollection",
        1,
        3
      );
      if (megaCollectionData.isSuccess) {
        setMegaMenu(megaCollectionData.results as MegaMenu[]);
      }
      // =======================
    };
    // setLoading(false);
    runLocalData();
  }, [cart]);

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  };

  const handleRemoveCartItem = (e: any, item: Article) => {
    e.preventDefault();
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        product: item.product,
        quantity: item.quantity,
      },
    });
  };

  return (
    <Fragment>
      <div className="Header ">
        <header className="header_wrap fixed-top header_with_topbar active">
          <div className="top-header">
            {/* <div className="container m-5"> */}
            <div className="container-fuid px-5 ">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <div className="me-3">
                      <div
                        className="ddOutOfVision"
                        id="msdrpdd20_msddHolder"
                        style={{
                          height: "0px",
                          overflow: "hidden",
                          position: "absolute",
                        }}
                      >
                        <select
                          name="countries"
                          className="custome_select"
                          id="msdrpdd20"
                        >
                          <option value="USD" data-title="USD">
                            USD
                          </option>
                          <option value="EUR" data-title="EUR">
                            EUR
                          </option>
                          <option value="GBR" data-title="GBR">
                            GBR
                          </option>
                        </select>
                      </div>
                      <div
                        className="dd ddcommon borderRadius"
                        id="msdrpdd20_msdd"
                        style={{ width: "52px" }}
                      >
                        <div className="ddTitle borderRadiusTp">
                          <span className="divider"></span>
                          <span className="ddArrow arrowoff"></span>
                          <span className="ddTitleText " id="msdrpdd20_title">
                            <span className="ddlabel">USD</span>
                            <span
                              className="description"
                              style={{ display: "none" }}
                            ></span>
                          </span>
                        </div>
                        <input
                          id="msdrpdd20_titleText"
                          type="text"
                          autoComplete="off"
                          className="text shadow borderRadius"
                          style={{ display: "none" }}
                        />
                        <div
                          className="ddChild ddchild_ border shadow"
                          id="msdrpdd20_child"
                          style={{
                            zIndex: 9999,
                            display: "none",
                            position: "absolute",
                            visibility: "visible",
                            height: "99px",
                          }}
                        >
                          <ul>
                            <li
                              className="enabled _msddli_ selected"
                              title="USD"
                            >
                              <span className="ddlabel">USD</span>
                              <div className="clear"></div>
                            </li>
                            <li className="enabled _msddli_" title="EUR">
                              <span className="ddlabel">EUR</span>
                              <div className="clear"></div>
                            </li>
                            <li className="enabled _msddli_" title="GBR">
                              <span className="ddlabel">GBR</span>
                              <div className="clear"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="contact_detail text-center text-lg-start">
                      <li>
                        <i className="ti-mobile"></i>
                        <span>{getMetas(metas, "site_phone")} </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center text-md-end">
                    <ul className="header_list">
                      <li>
                        <Link to="/compare">
                          <i className="ti-control-shuffle"></i>
                          <span>Compare</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist">
                          <i className="ti-heart"></i>
                          <span>Wishlist</span>
                        </Link>
                      </li>
                      {isAuth ? (
                        <>
                          <li>
                            <Link to="/account">
                              <i className="ti-user"></i>
                              <span>Account</span>
                            </Link>
                          </li>
                          <li>
                            <a onClick={handleLogout} href="/signin">
                              <i className="ti-user"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to="/signin">
                              <i className="ti-user"></i>
                              <span>Signin</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/signup">
                              <i className="ti-user"></i>
                              <span>Signup</span>
                            </Link>
                          </li>
                        </>
                      )}
                      <></>
                      <></>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_header dark_skin main_menu_uppercase">
            <div className="container-lg ">
              {/* <div className="container-fluid px-3"> */}
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <h2>{getMetas(metas, "site_name")}</h2>
                </Link>
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-expanded="false"
                  className="navbar-toggler collapsed"
                >
                  <span className="ion-android-menu"></span>
                </button>
                <div
                  id="navbarSupportedContent"
                  className="navbar-collapse justify-content-end collapse"
                >
                  <ul className="navbar-nav">
                    <li className="dropdown">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        className="dropdown-toggle nav-link active"
                        aria-expanded="false"
                      >
                        Pages
                      </Link>
                      <div className="dropdown-menu">
                        <ul>
                          {pages.map((page) => {
                            return (
                              <li key={page._id}>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  // to="/about"
                                  to={"/page/" + page.slug}
                                >
                                  {/* About Us */}
                                  {page.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        className="dropdown-toggle nav-link"
                        aria-expanded="false"
                      >
                        Products
                      </Link>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          {categories?.map((category: Category) => {
                            return (
                              <li
                                className="mega-menu-col col-lg-3"
                                key={category._id}
                              >
                                <ul>
                                  <li className="dropdown-header">
                                    {category.name}
                                  </li>
                                  {category?.products?.map(
                                    (produt: Product) => {
                                      return (
                                        <li key={produt._id}>
                                          <Link
                                            className="dropdown-item nav-link nav_item"
                                            to={"/product/" + produt.slug}
                                          >
                                            <img
                                              src={produt.imageUrls[0]}
                                              alt={produt.name}
                                              width={30}
                                              height={30}
                                            />
                                            {produt.name}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="d-lg-flex menu_banners row g-3 px-3">
                          {megaMenu?.map((menu: MegaMenu) => {
                            return (
                              <div className="col-sm-4" key={menu._id}>
                                <div className="header-banner">
                                  <img alt="menu_banner1" src={menu.imageUrl} />
                                  <div className="banne_info">
                                    <h6>
                                      {/* 10% Off */}
                                      {menu.description}
                                    </h6>
                                    <h4>{menu.title} </h4>
                                    <Link to={menu.button_link}>
                                      {menu.button_text}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className="nav-link"
                        ng-reflect-router-link="/shop-list"
                        href="/shop-list"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-link nav_item"
                        ng-reflect-router-link="/contact"
                        href="/contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="navbar-nav attr-nav align-items-center">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="nav-link search_trigger"
                    >
                      <i className="linearicons-magnifier"></i>
                    </a>
                    <div className="search_wrap">
                      <span className="close-search">
                        <i className="ion-ios-close-empty"></i>
                      </span>
                      <form className="ng-untouched ng-pristine ng-valid">
                        <input
                          type="text"
                          placeholder="Search"
                          id="search_input"
                          className="form-control"
                        />
                        <button type="submit" className="search_icon">
                          <i className="ion-ios-search-strong"></i>
                        </button>
                      </form>
                    </div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                  </li>
                  {cart?.quantity ? (
                    <li className="dropdown cart_dropdown">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="nav-link cart_trigger"
                      >
                        <i className="linearicons-cart"></i>
                        <span className="cart_count">{cart.quantity}</span>
                      </a>
                      <div className="cart_box dropdown-menu dropdown-menu-right">
                        <ul className="cart_list">
                          {cart?.items.map((item) => {
                            const { product } = item;
                            return (
                              // <li key={index}>
                              <li key={product._id}>
                                <a
                                  href="#"
                                  onClick={(e) => handleRemoveCartItem(e, item)}
                                  className="item_remove"
                                >
                                  <i className="ion-close"></i>
                                </a>
                                <a href="#">
                                  <img
                                    width="50"
                                    height="50"
                                    alt="cart_thumb1"
                                    src={product.imageUrls[0]}
                                  />
                                  {/* Culotte en dentelle */}
                                  {product.name}
                                </a>
                                <span className="cart_quantity">
                                  {item.quantity}x
                                  <span className="cart_amount">
                                    <span className="price_symbole">
                                      {/* 23,91&nbsp;€ */}
                                      {formatPrice(product.solde_price)}
                                      <span>=</span>
                                      {formatPrice(item.sub_total)}{" "}
                                    </span>
                                  </span>
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="cart_footer">
                          <p className="cart_total">
                            <strong>Subtotal:</strong>
                            <span className="cart_price">
                              {/* {cart.sub_total.toFixed(2)} */}
                              {formatPrice(
                                parseFloat(cart.sub_total.toFixed(2))
                              )}
                              {/* <span className="price_symbole"> </span> */}
                            </span>
                          </p>
                          <p className="cart_buttons">
                            <Link
                              className="btn btn-fill-line view-cart"
                              to="/cart"
                            >
                              View Cart
                            </Link>
                            <Link
                              className="btn btn-fill-out checkout"
                              to="/checkout"
                            >
                              Checkout
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                  ) : null}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
