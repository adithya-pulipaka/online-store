import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  IconButton,
  Tooltip,
  Container,
} from "@mui/material";
import Link from "next/link";
import { useCart } from "../hooks/useCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CartDrawer from "./CartDrawer";

const Layout = ({ children }) => {
  const cart = useCart();
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <Container>
        <AppBar position="fixed">
          <Container>
            <Toolbar sx={{ mr: 2 }}>
              <Link href={"/"}>
                <Typography
                  sx={{ marginRight: "auto", cursor: "pointer" }}
                  variant="h6"
                  component="div"
                >
                  Products
                </Typography>
              </Link>
              <Tooltip title="View Cart">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={() => setOpenCart(true)}
                >
                  <Badge
                    badgeContent={cart.state.count}
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  >
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
        {children}
        <CartDrawer
          open={openCart}
          onClose={() => setOpenCart(false)}
        ></CartDrawer>
      </Container>
    </>
  );
};

export default Layout;
