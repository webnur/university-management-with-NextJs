"use client";
import { Layout, Menu } from "antd";
import { useState } from "react";
import type { MenuProps } from "antd";

import { SidebarItems } from "@/constants/SidebarItems";
import { USER_ROLE } from "@/constants/role";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.STUDENT;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        PH-University
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
