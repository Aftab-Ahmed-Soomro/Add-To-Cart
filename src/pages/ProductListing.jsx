import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../store/Actions/ActionTypes";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const allProducts = useSelector((state) => state?.allProducts);

  const getData = async () => {
    const productData = await fetch("https://fakestoreapi.com/products");
    const response = await productData.json();
    dispatch({ type: ProductTypes.ALL_PRODUCTS, payload: response });
    setLoading(true);
  };

  // console.log(allProducts);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[1200px] m-auto p-3">
      {loading ? 
      <Row gutter={[16, 16]}>
      {allProducts.map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6} >
            <ProductCard data={item} />
          </Col>  
      );
      })}
      </Row>
      : <div className="flex justify-center items-center h-[70vh]">
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>}
    </div>
  );
};

export default ProductListing;
