import { Typography } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import Faq from '../pages/Faq';
import Shipping from '../pages/Shipping';
import Orderstat from '../pages/Orderstat';
import Pay from '../pages/Pay';
import { TwitterOutlined  } from "@ant-design/icons";
import { PhoneOutlined  } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { FacebookOutlined  } from "@ant-design/icons";

function Footer() {
  return (
    <div className='footer'>
        <div className="myfoot">
              <div className="row">
                <div className="col">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Our services</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h4>Help</h4>
                  <ul className='help'>
                    <Link to={Faq}>FAQ</Link>
                    <Link to={Shipping}>Shipping</Link>
                    <Link to={Orderstat}>Order Status</Link>
                    <Link to={Pay}>Payment Method</Link>
                  </ul>
                </div>
                <div className="col">
                  <h4>Follow us</h4>
                  <div className="social">
                    <li><InstagramOutlined /></li><br/>
                    <li><TwitterOutlined /></li><br></br>
                    <li><FacebookOutlined /></li>
                  </div>
                </div>
                <div className="con">
                  <h4>Contacts</h4>
                  <p><PhoneOutlined />   +22 693 095 001</p>
                </div>
              </div>
            </div>
            <div className='last'>© {new Date().getFullYear()} VersaCart Online Shopping Copyright.All rights reserved.</div>
    </div>
  )
}

export default Footer;