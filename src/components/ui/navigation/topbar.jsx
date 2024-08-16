import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Image, Layout, Menu, theme } from "antd";
import { NavItems } from "../../../utils/constants";
import { Sidebar } from "./sidebar";
const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);
export const Topbar = () => {
  return (
    <Layout>
      <Header className="bg-white text-black">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={NavItems}
          className="flex justify-end"
        />
      </Header>
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
      </Layout>
    </Layout>
  );
};
