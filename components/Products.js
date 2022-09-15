import { Box, Typography } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ list }) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 2,
          marginBottom: 2,
          textDecoration: "underline",
        }}
      >
        Product List
      </Typography>
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
