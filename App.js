import {  Space } from "antd";
import "./App.css";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Space>
        <Sider/>
        <Content/>
      </Space>
      <Footer />
    </div>
  );
}

export default App;
