import React from "react";
import { Layout } from "antd";
import Head from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import "./Dashboard.css";

const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "20px", padding: "20px" }}>
          <Outlet /> {/* Render nested routes like Crud here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;