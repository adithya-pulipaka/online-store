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

const ProductItem = ({ details }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const cart = useCart();

  const addToCart = () => {
    cart.addToCart(details);
    setOpenNotif(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotif(false);
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
            {details.price}
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
          <Button
            variant="contained"
            size="small"
            endIcon={<AddShoppingCartIcon />}
            onClick={(e) => addToCart(e)}
          >
            Add to Cart
          </Button>
          {/* <Typography sx={{ borderBottom: "1px solid black" }}>
            {cartCount > 0 ? cartCount : ""}
          </Typography> */}
        </CardActions>
        <Snackbar
          open={openNotif}
          autoHideDuration={1000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert severity="success" variant="filled">
            Added to Cart
          </Alert>
        </Snackbar>
      </Card>
    </>
  );
};

export default ProductItem;
