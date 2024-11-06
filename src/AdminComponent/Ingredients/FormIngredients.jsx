import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient } from "../../State/Ingredients/Action";

const FormIngredients = () => {
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {restaurant,ingredients}=useSelector(store=>store)
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      restaurantId: restaurant.usersRestaurant.id
    };
     dispatch(createIngredient({data,jwt}))
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredients
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <FormControl fullWidth>
            <InputLabel id="demo-controlled-open-select-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="categoryId"
              value={formData.categoryId}
              label="Category"
              onChange={handleInputChange}
              name="categoryId"
            >
             {ingredients.category.map((item)=><MenuItem value={item.id}>{item.name}</MenuItem>) }
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name Ingredient"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button
            className="mt-4"
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Ingredient
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormIngredients;
