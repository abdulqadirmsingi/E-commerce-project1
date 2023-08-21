import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TwitterOutlined, FacebookOutlined,PhoneOutlined , InstagramOutlined,FrownOutlined, SmileOutlined   } from "@ant-design/icons";
import { Slider } from 'antd';
import logo from '../images/Hardtechlogo.PNG'


function Footer(props) {
    const { max, min } = props;
    const [value, setValue] = useState(0);
    const mid = Number(((max - min) / 2).toFixed(5));
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="footer">
      <div className="myfoot">
        <div className="row">
          <div className="col">
            <h4>Company</h4>
            <div className="comp">
            <ul>
              <Link to="/about">
                <a>About us</a>
              </Link><br/>
              <Link to="/">
                <a>Privacy</a>
              </Link><br/>
              <Link to="/services">
                <a>Our services</a>
              </Link>
            </ul>
            </div>
          </div>
          <div className="col">
            <h4>Help</h4>
            <ul className="help">
              <Link to="/faq">
                <a>FAQ</a>
              </Link>
              <Link to="/shipping">
                <a>Shipping</a>
              </Link>
              <Link to="/orderstat">
                <a>Order Status</a>
              </Link>
              <Link to="pay">
                <a>Payment Method</a>
              </Link>
            </ul>
          </div>
          <div className="col">
            <h4>Follow us</h4>
            <div className="social">
              <li>
                <InstagramOutlined style={{color:'blueviolet'}}/>
              </li>
              <br />
              <li>
                <TwitterOutlined style={{color:'blueviolet'}}/>
              </li>
              <br></br>
              <li>
                <FacebookOutlined style={{color:'blueviolet'}}/>
              </li>
            </div>
          </div>
          <div className="con">
            <h4>Contacts</h4>
            <p style={{color:'blueviolet'}}>
              <PhoneOutlined /> +255 693 095 001
            </p>
          </div>
          <div className="col">
            <h4>Countries</h4>
            <div className="comp">
            <ul>
              <li style={{color:'blueviolet'}}>Tanzania</li>
              <li style={{color:'blueviolet'}}>Kenya</li>
              <li style={{color:'blueviolet'}}>Uganda</li>
            </ul>
            </div>
          </div>
          <div className="col">
            <h4>Rate Us</h4>
            <div className="icon-wrapper" >
      <FrownOutlined className={preColorCls} style={{color:"blueviolet"}} />
      <Slider {...props} onChange={setValue} value={value} min={0} max={10}/>
      <SmileOutlined className={nextColorCls} style={{color:"blueviolet"}} />
    </div>
          </div>
          <div className="col">
            <h4>Sponsorship</h4>
            <img src={logo} alt="" width='10%' height='auto'/>
          </div>
        </div>
      </div>
      <div className="last">
        © {new Date().getFullYear()} VersaCart Online Shopping Copyright.All
        rights reserved.
      </div>
    </div>
  );
}

export default Footer;
