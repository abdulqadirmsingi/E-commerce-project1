import React from "react";
import { Image, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import versa from "../images/versa.jpg";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App-header">
        <img src={versa} className="logohead" ></img>
        
        <Space>
          
          <ul className="navbar">
            <li>
              <Link to="/">
                <HomeOutlined /> Home
              </Link>
            </li>
            <li>
              <Link to="/news">News and Resources</Link>
            </li>
            <li>
              <Link to="/order">Order Now</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </Space>
      </div>
    </>
  );
}

export default Header;
