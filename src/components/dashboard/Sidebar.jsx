import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, DatabaseOutlined, SettingOutlined, BgColorsOutlined, EllipsisOutlined } from "@ant-design/icons";
import "./head-sidebar.css";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === "1") {
      navigate("/dashboard");
    } else if (key === "2") {
      navigate("/dashboard/crud"); // Navigate to the nested Crud route
    } else if (key === "3") {
      navigate("/dashboard/setting");
    } else if (key === "4") {
      navigate("/dashboard/theme");
    } else if (key === "5") {
      navigate("/dashboard/etc");
    }
  };

  return (
    <Sider width={200} className="sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        onClick={handleMenuClick}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DatabaseOutlined />}>
          Crud
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="4" icon={<BgColorsOutlined />}>
          Theme
        </Menu.Item>
        <Menu.Item key="5" icon={<EllipsisOutlined />}>
          Etc
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;