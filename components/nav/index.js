import React from "react";
import classes from "./index.module.scss";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navigation = () => {
  const router = useRouter();

  return (
    <div className={`navbar navbar-expand-lg ${classes.mainHeader}`}>
      <Container className="d-flex align-items-center">
      <Link href="/">
      <a className={classes.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </a>
    </Link>
    

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className={`nav-item`}>
              <Link href="/">
                <a
                  className={`nav-link ${
                    router.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="/products">
                <a
                  className={`nav-link ${
                    router.pathname === "/products" ? "active" : ""
                  }`}
                >
                  Shop
                </a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="/blogs">
                <a
                  className={`nav-link ${
                    router.pathname === "/blogs" ? "active" : ""
                  }`}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link href="/contact" className="nav-link">
                <a
                  className={`nav-link ${
                    router.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="headerAction d-flex align-items-center">
            <div className="headerIcons d-none d-lg-block me-2">
              <button className="search-icon nav-link">
                <Image src="/images/search.png" alt="Search" width={16} height={16} />
              </button>
              <Link href="/cart" >
                <a className="nav-link cart-icon">
                  <Image src="/images/cart.png" alt="Cart" width={16} height={16} />
                </a>
              </Link>
            </div>
            <div className="headerButtons ml-md-2">
              <Link href="/registration">
                <a className="btn btn-primary me-3">
                  Registration
                </a>
              </Link>
              <Link href="/sign-in">
                <a className="btn btn-outline">
                  Sign In
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
