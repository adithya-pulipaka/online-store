import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
<<<<<<< HEAD
  Button,
  Link,
=======
>>>>>>> master
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
<<<<<<< HEAD
import { useRouter } from "next/router";
import OrderSummary from "../components/OrderSummary";
=======
>>>>>>> master

const EMPTY_CART = (
  <>
    {" "}
    <h1>Cart Empty: No Items Added</h1>
  </>
);
const DELIVERY = 5;

const CartDetails = () => {
  const cart = useCart();
  const router = useRouter();

  const subTotal = cart.state.products
    .map((item) => item.count * item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const count = cart.state.count;
  const taxes = parseFloat((0.05 * subTotal).toFixed(2));
  const total = subTotal + taxes + DELIVERY;
  const orderDetails = { subTotal, count, taxes, total };

  const removeProduct = (id) => {
    cart.removeFromCart(id);
  };

  return (
    <>
      <Head>
        <title>Online Store: Cart</title>
      </Head>
      {cart.state.count === 0 ? (
        EMPTY_CART
      ) : (
        <Box sx={{ marginTop: 5, display: "flex", gap: 5 }}>
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 4,
                textDecoration: "underline",
              }}
            >
              Cart Details
            </Typography>
            {cart.state.products.map((product) => {
              return (
                <Card
                  sx={{ display: "flex", marginBottom: 2 }}
                  key={product.id}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "20%", height: 150 }}
                    image={product.small}
                  />
                  <CardContent
                    sx={{
                      width: "80%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="h5" sx={{ marginBottom: 1 }}>
                        {product.productName}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "auto", marginRight: 5 }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Price: ${product.count * product.price}
                      </Typography>
                      <Typography sx={{ marginBottom: 1 }}>
                        Count: {product.count}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Tooltip title="Remove Product">
                    <IconButton
                      sx={{ marginBottom: "auto" }}
                      onClick={() => removeProduct(product.id)}
                    >
                      <CloseIcon fontSize={"medium"}></CloseIcon>
                    </IconButton>
                  </Tooltip>
                </Card>
              );
            })}
          </Box>
          <Box sx={{ width: "30%" }}>
            <OrderSummary
              isCheckout={false}
              onDecision={() => router.push("/checkout")}
            ></OrderSummary>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CartDetails;
