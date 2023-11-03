/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserOutlined } from "@ant-design/icons";
import logo from "assets/zigvy-logo.svg";
import { Link } from "react-router-dom";

import { Avatar } from "antd";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <a href="#">
          <img src={logo} alt="Corporation" />
        </a>
      </div>
      <div className="header__center">
        <Link to={"/"} className="link">
          <span>Blogs</span>
        </Link>
      </div>
      <div className="header__right">
        <Avatar
          size={40}
          icon={<UserOutlined />}
          className="header__right_icon"
        />
        <span className="header__right_name">Nam Nguyen</span>
      </div>
    </div>
  );
};

export default Header;
