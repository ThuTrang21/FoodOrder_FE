import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { uploadImageToCloud } from "../../util/UploadToCloudinary";
import { useDispatch, useSelector } from "react-redux";
import { createMenuItems } from "../../State/Menu/Action";
import {getIngredientsOfRestaurant } from "../../State/Ingredients/Action";
import { useNavigate } from "react-router-dom";

export const CreateMenuForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, ingredients } = useSelector((store) => store);
const navigate=useNavigate()
  const initialValues = {
    name: "",
    description: "",
    price: "",
    foodCategory: "",
    restaurantId: "",
    vegetarian: "",
    seasonal: "",
    ingredients: [],
    images: [],
  };
  
  const [uploadImage, setUploadImage] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = 1;
      dispatch(createMenuItems({ menu: values, jwt }));
      navigate("/admin/restaurants/menu")
    },
  });
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloud(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };
  const hanleRemoveImage = (index) => {
    const updateImages = [...formik.values.images];
    updateImages.splice(index, 1);
    formik.setFieldValue("images", updateImages);
  };



  useEffect(() => {
    dispatch(
      getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant.id })
    );
  }, []);
  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl ">
        <h1 className="font-bold  text-2xl text-center py-2">Add New Menu</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                type="file"
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className=" flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative">
                    <img
                      className="w-24 h-24 object-cover"
                      key={index}
                      src={image}
                      alt=""
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => hanleRemoveImage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
                multiline
                rows={3}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg="6">
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg="6">
              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Food Category
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="foodCategory"
                  value={formik.values.foodCategory}
                  label="Food Category"
                  onChange={formik.handleChange}
                  name="foodCategory"
                >
                  {restaurant.categories.map((item)=><MenuItem value={item}>{item.name}</MenuItem>)}
                 
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">
                  Ingredients
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="ingredients"
                  name="ingredients"
                  multiple
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Ingredients"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value.id} label={value.name} />
                      ))}
                    </Box>
                  )}
                >
                  {ingredients.ingredients?.map((item) => (
                    <MenuItem key={item.id} value={item}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Is Seasonal
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="seasonal"
                  value={formik.values.seasonal}
                  label="Is Seasonal"
                  onChange={formik.handleChange}
                  name="seasonal"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Is Vegetarian
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="vegetarian"
                  value={formik.values.vegetarian}
                  label="Is Vegetarian"
                  onChange={formik.handleChange}
                  name="vegetarian"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            className="mt-4"
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Menu Item
          </Button>
        </form>
      </div>
    </div>
  );
};
