import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../hooks/useCart";
const DELIVERY = 5;

const OrderSummary = ({ isCheckout, onDecision }) => {
  const cart = useCart();
  const subTotal = cart.state.products
    .map((item) => item.count * item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const count = cart.state.count;
  const taxes = parseFloat((0.05 * subTotal).toFixed(2));
  const total = subTotal + taxes + DELIVERY;
  const orderDetails = { subTotal, count, taxes, total };
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 4,
            textDecoration: "underline",
          }}
        >
          Order Summary
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginBottom: 1 }}>
              Subtotal ({orderDetails.count} items)
            </Typography>
            <Typography sx={{ marginBottom: 1 }}>Delivery</Typography>
            <Typography sx={{ marginBottom: 1 }}>Taxes</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "auto",
              textAlign: "right",
            }}
          >
            <Typography sx={{ marginBottom: 1 }}>
              ${orderDetails.subTotal}
            </Typography>
            <Typography sx={{ marginBottom: 1 }}>$5</Typography>
            <Typography sx={{ marginBottom: 1 }}>
              ${orderDetails.taxes}
            </Typography>
          </Box>
        </Box>
        <hr />
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
          <Typography sx={{ fontWeight: "bold", marginLeft: "auto" }}>
            ${orderDetails.total}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Button
            variant="contained"
            color={"secondary"}
            onClick={() => onDecision()}
          >
            {isCheckout ? "Confirm and Pay" : "Checkout"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default OrderSummary;
