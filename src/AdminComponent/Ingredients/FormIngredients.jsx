import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormIngredients = () => {
  const [formData, setFormData] = useState({
    name:"",
    ingredientCategoryId:""
  });
  const handleSubmit = () => {
const data={
    name:formData.categoryName,
    restaurantId:{
        id:1,

    },
};
console.log(data)

  };
  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setFormData({
        ...formData,[name]:value
    })
  }
  
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredients
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <TextField
            fullWidth
            id="ingredient"
            name="ingredient"
            label="Ingredient"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="ingredientCategoryId"
                  value={formData.ingredientCategoryId}
                  label="Category"
                  onChange={handleInputChange}
                  name="ingredientCategoryId"
                >
                  
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
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
  )
}

export default FormIngredients