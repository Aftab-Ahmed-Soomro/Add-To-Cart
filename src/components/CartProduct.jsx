import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { ProductTypes } from "../store/Actions/ActionTypes";

const CartProduct = ({data}) => {
  const dispatch = useDispatch();  
  const { id, title, image, price, } = data;
  return (
    <div>
      <Card
        className="boxShadow mb-5"
        style={{ width: 290 }}
        hoverable
      >
        <div className="flex gap-5 items-center">
          <div>
            <img
              className="w-[80px] h-[80px] object-contain"
              alt={image}
              src={image}
            />
          </div>
          <div>
            <p>{title}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
            <p className="text-base font-normal text-red-500">Price : <span className="text-green-600">{price} $</span></p>
            <DeleteOutlined onClick={()=>dispatch({ type:ProductTypes.REMOVE_CART_PRODUCT, payload:{id:id} })} className="text-xl text-red-600"/>  
        </div>
      </Card>
    </div>
  );
};

export default CartProduct;
