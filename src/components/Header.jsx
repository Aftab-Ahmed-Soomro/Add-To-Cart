import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Drawer, Empty } from "antd";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const CartData = useSelector((state) => state?.cart);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onClose();
    // setOpen(false);
  }, [CartData.length == 0]);

  const totalAmount = CartData.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  return (
    <div className="bg-slate-300 py-7 mb-6 sticky top-0 shadow-md z-50">
      <div className="m-auto flex justify-between items-center px-20">
        <h1 className="lg:text:3xl md:text-3xl sm:text-xl font-bold fontFam">Product Store</h1>
        <div>
          <Badge count={CartData?.length}>
            <ShoppingCartOutlined
              className="text-4xl"
              onClick={showDrawer}
            />
          </Badge>
          <Drawer title="Products" onClose={onClose} open={open}>
            <div className="h-[400px] overflow-y-auto">
              {CartData.length > 0 && CartData.id == CartData.id ? (
                <>
                  {CartData.map((item) => {
                    return <CartProduct key={item.id} data={item} />;
                  })}
                </>
              ) : (
                <div className="flex justify-center items-center h-[30vh]">
                  <Empty description="No Product Found" />
                </div>
              )}
            </div>
            <p className="text-lg font-semibold">Total Amount : <span className="text-green-600">{totalAmount.toFixed(2)} $</span></p>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
