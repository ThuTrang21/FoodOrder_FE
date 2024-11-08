import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFoodAction,
  getMenuItemsByRestaurantId,
  updateMenuItemsAvailability,
} from "../../State/Menu/Action";

export const MenuTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, menu } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({ foodId, jwt }));
  };

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: restaurant.usersRestaurant.id,
        vegetarian: false,
        nonveg: false,
        seasonal: false,
        foodCategory: "",
      })
    );

    console.log("menu: ", menu);
  }, []);

  const handleUpdateStoke = (id) => {
    dispatch(updateMenuItemsAvailability({ foodId: id, jwt }));
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"All Menu Items"}
          sx={{ pt: 2, alignItems: "center", pl: 10 }}
          action={
            <IconButton
              onClick={() => navigate("/admin/restaurants/add-menu")}
              aria-label="settings"
            >
              <CreateIcon />
            </IconButton>
          }
        ></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Avaibility</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.menuItems.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={item.images} />
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    {item.ingredients.map((ingr) => (
                      <Chip label={ingr.name} />
                    ))}
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">
                  {
                      <Button onClick={() => handleUpdateStoke(item.id)}>
                        {item.available? "in_stoke" : "out_of_stoke"}
                      </Button>
                    }
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleDeleteFood(item.id)}>
                      <DeleteIcon />
                    </IconButton>
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
