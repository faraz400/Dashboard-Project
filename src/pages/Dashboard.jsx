import React from "react";
import { Layout } from "antd";
import Head from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import "../components/dashboard/head-sidebar.css"; // Corrected path to CSS file


const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head />
      <Layout>
        <Sidebar />
        <Content style={{ margin: "20px", padding: "10px" }}>
          <Outlet /> {/* Render nested routes like Crud here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;