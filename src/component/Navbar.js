import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        &nbsp;
        <div>로그인</div>
      </div>
      <div className="logo">
        <img
          width={100}
          src="https://blog.kakaocdn.net/dn/mPpwY/btrS08qGYmD/HMrVGbYtNNpxynW3i53Zy1/img.png"
          alt="H&M logo"
          onClick={goToHome}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
