import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Snackbar,
  Alert,
  Rating,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

const ADDED_TO_CART = {
  enabled: true,
  message: "Added to Cart",
  severity: "success",
};
const REMOVED_FROM_CART = {
  enabled: true,
  message: "Removed from Cart",
  severity: "error",
};

const ProductItem = ({ details }) => {
  const [notif, setNotif] = useState({
    enabled: false,
    message: "",
    severity: "success",
  });
  const cart = useCart();
  const count = cart.getItemCount(details.id);

  const addToCart = () => {
    const {
      id,
      price,
      productName,
      rating,
      urls: { small },
    } = details;
    cart.addToCart({ id, price, productName, rating, small });
    setNotif(ADDED_TO_CART);
  };

  const removeFromCart = () => {
    const { id } = details;
    cart.reduceFromCart(id);
    setNotif(REMOVED_FROM_CART);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotif((prev) => ({ ...prev, enabled: false }));
  };
  return (
    <>
      <Card
        sx={{
          border: "1px solid black",
          width: 250,
          height: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component={"img"}
          image={details.urls.small}
          alt={details.alt_description}
          height={250}
        ></CardMedia>
        <CardContent
          sx={{
            pt: 1,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              {details.productName}
            </Typography>
            <Rating
              name="read-only"
              value={details.rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
          <Typography sx={{ fontWeight: "bold", color: "blue" }}>
            ${details.price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            width: "100%",
            mt: "auto",
            mb: 1,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {count == 0 && (
            <Button
              variant="contained"
              size="small"
              endIcon={<AddShoppingCartIcon />}
              onClick={(e) => addToCart(e)}
            >
              Add to Cart
            </Button>
          )}
          {count > 0 && (
            <Box sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{ marginRight: 2 }}
                size="small"
                onClick={(e) => removeFromCart(e)}
              >
                -
              </Button>
              <Typography sx={{ borderBottom: "1px solid black" }}>
                {count > 0 ? count : ""}
              </Typography>
              <Button
                variant="outlined"
                sx={{ marginLeft: 2 }}
                size="small"
                onClick={(e) => addToCart(e)}
              >
                +
              </Button>
            </Box>
          )}
        </CardActions>
        <Snackbar
          open={notif.enabled}
          autoHideDuration={1000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert severity={notif.severity} variant="filled">
            {notif.message}
          </Alert>
        </Snackbar>
      </Card>
    </>
  );
};

export default ProductItem;
