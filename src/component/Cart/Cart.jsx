import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { CartItem } from "./CartItem";
import { AddressCard } from "./AddressCard";
import {  Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../State/Order/Action";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
const Cart = () => {
  const createOrderUsingSelectAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const {cart,auth}=useSelector(store=>store);
  const dispatch=useDispatch();

  const handleClose = () => setOpen(false);
  
  const handleSubmit = (values) => {
    const data={
      jwt:localStorage.getItem("jwt"),
      order:{
        restaurantId:cart.cartItems[0].food?.restaurant.id,
        deliveryAddress:{
          fullName:auth.user?.fullName,
          streetAddress:values.streetAddress,
          city:values.city,
          state:values.state,
          postalCode:values.pincode,
          country:"VietNam"
        }
      }
    }
    dispatch(createOrder(data))
    console.log("Form value ", values);
  };

  
  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>${cart.cart?.total}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>DeliverFee</p>
                <p>$33</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>$21</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400 ">
              <p>Total pay</p>
              <p>${cart.cart?.total+33+21}</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 ">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Chọn địa chỉ giao hàng
            </h1>
            <div className="flex gap-5 flex-wrap justify-center ">
              {[1, 1, 1].map((item) => (
                <AddressCard
                  handleSelectAddress={createOrderUsingSelectAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5 ">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500 ">
                  <h1 className="font-semibold text-lg text-white">
                    Thêm địa chỉ mới
                  </h1>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="state"
                  label="State"
                  fullWidth
                  variant="outlined"
                
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  fullWidth
                  variant="outlined"
                
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="pincode"
                  label="Pincode"
                  fullWidth
                  variant="outlined"
                  
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <Button
                fullWidth
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                    Deliver Here
                </Button>
              </Grid>
            </Grid>
            </Form>
            
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
