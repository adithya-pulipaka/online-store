import { Box } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ list }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        {list.map((product) => {
          return <ProductItem details={product} key={product.id}></ProductItem>;
        })}
      </Box>
    </>
  );
};

export default Products;
