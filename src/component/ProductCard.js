import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/:${item.id}`);
  };
  return (
    <div onClick={showDetail}>
      <img src={item?.img} alt="product" />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>￦{item?.price}원</div>
      <div>{item?.new === true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard;
