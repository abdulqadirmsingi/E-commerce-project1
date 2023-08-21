import { Space } from "antd";
import "./App.css";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="sider">
          <Sider />
        </div>

        <div className="content1">
          <Content />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
