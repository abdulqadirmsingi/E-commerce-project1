import React from "react";
import { Image, Space, Typography, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeOutlined
} from '@ant-design/icons';


function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App-header">
        <Image
          width={90}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        ></Image>
        <Space>
          <span style={{ color: "#1890ff", fontSize: 24 }}></span>
          <ul className="navbar">
            <li>
              <Link to="/home"><HomeOutlined /> Home</Link>
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
