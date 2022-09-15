import {
  Box,
  Drawer,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/router";

const CartDrawer = ({ open, onClose }) => {
  const cart = useCart();
  const details = cart.state.products;
  const router = useRouter();

  const navigateToCheckout = () => {
    router.push("/cart");
    onClose();
  };
  return (
    <>
      <Drawer anchor={"right"} open={open} onClose={() => onClose()}>
        <IconButton sx={{ marginLeft: "auto" }} onClick={() => onClose()}>
          <CloseIcon fontSize={"large"}></CloseIcon>
        </IconButton>
        <Box sx={{ width: 500, padding: 5, paddingTop: 1 }}>
          <Typography variant="h4" sx={{ marginBottom: 5 }}>
            Cart Summary: {cart.state.count} in Total
          </Typography>
          <Box>
            {details.map((product) => {
              return (
                <Card
                  sx={{ display: "flex", marginBottom: 2 }}
                  key={product.id}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150 }}
                    image={product.small}
                  />
                  <CardContent>
                    <Box>
                      <Typography variant="h5" sx={{ marginBottom: 1 }}>
                        {product.productName}
                      </Typography>
                      <Typography sx={{ marginBottom: 1 }}>
                        Total: {product.count}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Price: ${product.count * product.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
            {cart.state.count > 0 && (
              <Box sx={{ textAlign: "center", marginBottom: 1 }}>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  onClick={() => navigateToCheckout()}
                >
                  Go To Checkout
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
