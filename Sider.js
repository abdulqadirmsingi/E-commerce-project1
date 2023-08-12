import React from "react";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  UserOutlined,
  ShoppingOutlined,
  SkinOutlined,
  TabletOutlined,
  WomanOutlined,
  SmileOutlined,
  ManOutlined,
  GiftOutlined,
  BuildOutlined,
  YuqueOutlined,
} from "@ant-design/icons";

function Sider() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sider">
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            { label: "Dashboard", key: "/", icon: <AppstoreOutlined /> },
            { label: "Clothing", key: "/clothing", icon: <SkinOutlined /> },
            { label: "Shoes", key: "/shoes", icon: <YuqueOutlined /> },
            { label: "Bags", key: "/bags", icon: <ShoppingOutlined /> },
            { label: "Babies", key: "/babies", icon: <SmileOutlined /> },
            {
              label: "Electronics",
              key: "/electronics",
              icon: <TabletOutlined />,
            },
            { label: "Men", key: "/men", icon: <ManOutlined /> },
            { label: "Women", key: "/women", icon: <WomanOutlined /> },
            {
              label: "Decorations",
              key: "/decorations",
              icon: <GiftOutlined />,
            },
            {
              label: "Furnitures",
              key: "/furnitures",
              icon: <BuildOutlined />,
            },
            { label: "Sports", key: "/sports" },
          ]}
        ></Menu>
      </div>
    </>
  );
}

export default Sider;
