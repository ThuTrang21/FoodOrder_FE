import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormCategory = () => {
  const [formData, setFormData] = useState({
    name:""
  });
  const handleSubmit = () => {

console.log(formData)

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
          Create Ingredient Category
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Category"
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
            Create Category
          </Button>
        </form>
      </div>
    </div>
  )
}

export default FormCategory