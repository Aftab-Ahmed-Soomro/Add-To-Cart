import React from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../store/Actions/ActionTypes";
const { Meta } = Card;

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, description, image, price, category } = data;
  const CartData = useSelector((state)=>state);
  console.log(CartData);
  return (
    <div className="p-3">
      <Card
        className="boxShadow h-[370px] w-auto"
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            className="w-[200px] h-[180px] object-contain"
            alt={image}
            src={image}
          />
        }
      >
        {/* <p className="mb-3">Category : {category}</p> */}
        <Meta title={title} description={description.toLowerCase().slice(0, 80)} />
        <div className="flex justify-between items-center mt-3">
          <p className="text-base font-medium text-red-500">
            Price : <span className="text-green-600">{price} $</span>
          </p>
          <ShoppingCartOutlined onClick={()=>dispatch({type:ProductTypes.CART_PRODUCT,payload:data})} className="text-2xl"/>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
