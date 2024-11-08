import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder, updateOrderStatus } from "../../State/Restaurant Order/Action";
const orderStatus=[
  {label:"Pending",value:"PENDING"},
  {label:"Completed",value:"COMPLETED"},
  {label:"Out For Delivery",value:"OUT_FOR_DELIVERY"},
  {label:"Delivered",value:"DELIVERED"}
]
export const OrderTable = ({ filterValue }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, restaurantOrder} = useSelector(
    (store) => store
  );
  const [selectedOrderId, setSelectedOrderId] = useState(null);


  useEffect(() => {
    dispatch(
      fetchRestaurantsOrder({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null); 
  };

const handleUpdateOrder=(orderStatus)=>{
  dispatch(updateOrderStatus({orderId:selectedOrderId,orderStatus,jwt}))
  handleClose();
}

const filteredOrders = restaurantOrder.orders.filter((item) =>
  filterValue === "ALL" || filterValue === undefined
    ? true
    : item.orderStatus === filterValue
);

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"All Orders"}
          sx={{ pt: 2, alignItems: "center" }}
        ></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">
                    <AvatarGroup>
                      {item.items.map((orderItem) => (
                        <Avatar src={orderItem.food?.images[0]} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">{item.customer?.fullName}</TableCell>
                  <TableCell align="right">{item.totalAmount}</TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem) => (
                      <p>{orderItem.food?.name}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem) => (
                      <div className="m-3">
                        {orderItem.ingredients.map((ingr) => (
                          <Chip label={ingr} />
                        ))}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">{item.orderStatus}</TableCell>
                  <TableCell align="right">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => handleClick(e, item.id)}
                    >
                      Update
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open && selectedOrderId === item.id}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem onClick={()=>handleUpdateOrder(status.value)}>{status.label}</MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};
