import React from "react";
import classes from "./index.module.scss";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Swal from "sweetalert2";

const Navigation = ({ accessToken }) => {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          ...axios.defaults.headers,
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const res = await axios.post(
        "https://dutchflowers.devsfolio.com/api/customer/logout",
        { Authorization: `Bearer ${accessToken}` },
        config,
      );

      localStorage.removeItem("user");

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have Logged Out successfully",
      }).then((result) => {
        // Redirect to home page after user clicks "OK"
        if (result.isConfirmed) {
          // Perform redirection here
          window.location.href = "/"; // Replace "/home" with your home page URL
        }
      });
    } catch (error) {
      if (error.response) {
        console.log("Error status:", error.response.status);
        console.log("Error data:", error.response.data);
      }
      // Handle error
      console.error("Login error:", error);
      // You can show an error message to the user or handle the error in another way
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.response.data.message,
      });
    }
  };

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
          {accessToken !== false ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                j
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Order</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className="headerAction d-flex align-items-center">
              <div className="headerIcons d-none d-lg-block me-2">
                <button className="search-icon nav-link">
                  <Image
                    src="/images/search.png"
                    alt="Search"
                    width={16}
                    height={16}
                  />
                </button>
                <Link href="/cart">
                  <a className="nav-link cart-icon">
                  <span className="counter">1</span>
                    <Image
                      src="/images/cart.png"
                      alt="Cart"
                      width={16}
                      height={16}
                    />
                  </a>
                </Link>
              </div>
              <div className="headerButtons ml-md-2">
                <Link href="/registration">
                  <a className="btn btn-primary me-3">Registration</a>
                </Link>
                <Link href="/signin">
                  <a className="btn btn-outline">Sign In</a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
