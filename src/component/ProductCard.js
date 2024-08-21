import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img src={item?.img} alt="product" />
      <div>{item?.choice == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>￦{item?.price}원</div>
      <div>{item?.new == true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard;
