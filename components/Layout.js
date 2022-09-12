import React from "react";
import { AppBar, Toolbar, Badge } from "@mui/material";
import Link from "next/link";
import { useCart } from "../hooks/useCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Layout = ({ children }) => {
  const cart = useCart();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ ml: "auto", mr: 2 }}>
          <Link href={"cart"}>
            <Badge
              badgeContent={cart.state.count}
              color="secondary"
              sx={{ cursor: "pointer" }}
            >
              <AddShoppingCartIcon></AddShoppingCartIcon>
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
    </>
  );
};

export default Layout;
