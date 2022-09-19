import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OrderSummary from "../components/OrderSummary";

const EMPTY_CART = (
  <>
    {" "}
    <h1>Cart Empty: No Items Added</h1>
  </>
);
const DELIVERY = 5;

const Checkout = () => {
  const cart = useCart();
  const [section, setSection] = useState({ name: "shipping", expanded: true });

  const subTotal = cart.state.products
    .map((item) => item.count * item.price)
    .reduce((prev, curr) => prev + curr, 0);
  const count = cart.state.count;
  const taxes = parseFloat((0.05 * subTotal).toFixed(2));
  const total = subTotal + taxes + DELIVERY;
  const orderDetails = { subTotal, count, taxes, total };

  const handleSection = (name) => (e, expanded) => {
    setSection({ ...section, name, expanded });
  };

  return (
    <>
      <Head>
        <title>Online Store: Checkout</title>
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
              Checkout
            </Typography>
            <Card>
              <CardContent>
                <Accordion
                  expanded={section.name === "shipping" && section.expanded}
                  onChange={handleSection("shipping")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Shipping Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <form>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="First Name"
                            margin="normal"
                            sx={{ flex: 1 }}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Last Name"
                            margin="normal"
                            sx={{ marginLeft: 3, flex: 1 }}
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Address"
                            margin="normal"
                            sx={{ flex: 1 }}
                            //   fullWidth
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Address (Continued)"
                            margin="normal"
                            sx={{ flex: 1 }}
                            //   fullWidth
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="City"
                            margin="normal"
                            sx={{ flex: 1 }}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            label="State"
                            margin="normal"
                            sx={{ marginLeft: 3, flex: 1 }}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Zip code"
                            margin="normal"
                            sx={{ marginLeft: 3, flex: 1 }}
                          />
                        </Box>
                        <Button variant="outlined" sx={{ marginTop: 3 }}>
                          Save and Continue
                        </Button>
                      </form>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={section.name === "payment" && section.expanded}
                  onChange={handleSection("payment")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Payment Info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <form>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Card Number"
                            margin="normal"
                            sx={{ flex: 1 }}
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Name on card"
                            margin="normal"
                            sx={{ flex: 1 }}
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <TextField
                            variant="outlined"
                            size="small"
                            label="Expiry Month and Year"
                            margin="normal"
                            sx={{ flex: 1 }}
                          />
                          <TextField
                            variant="outlined"
                            size="small"
                            label="CVV"
                            margin="normal"
                            sx={{ marginLeft: 3, flex: 1 }}
                          />
                        </Box>
                      </form>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "30%" }}>
            <OrderSummary
              isCheckout={true}
              onDecision={() => alert("Order Complete!")}
            ></OrderSummary>
          </Box>
          {/* <Box sx={{ width: "30%" }}>
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
              <Button variant="contained" color={"secondary"}>
                Confirm and Pay
              </Button>
            </Box>
          </Box> */}
        </Box>
      )}
    </>
  );
};

export default Checkout;
