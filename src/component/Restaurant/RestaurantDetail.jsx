import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  Typography,
  Radio
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
const categories = ["pizza", "biryani", "burger", "chicken", "rice"];
  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "sesonal" },
  ];
  const menu=[1,1,1,1,1,1,1]
export default function RestaurantDetail() {
  
  const [foodType,setFoodType]=useState("all")
  const handleFilter=(e)=>{
    console.log(e.target.value,e.target.name)
  }
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/Việt Nam/ Nhà hàng Việt Nam/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[20rem] object-cover"
                src="https://i.pinimg.com/564x/8a/30/d5/8a30d51659ee758674a556867aa9e6a9.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://i.pinimg.com/564x/25/c3/87/25c387025fe00c397859cddab256c213.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://i.pinimg.com/564x/64/47/9c/64479c79e718452d4594a67df23ed259.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Nhà hàng Việt Nam</h1>
          <p className="text-gray-500 flex items-center gap-3">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium corporis doloremque et, sit earum consequatur dolorum
              hic delectus laboriosam iusto inventore distinctio blanditiis
              dolor exercitationem ipsum sint quo consequuntur alias.
            </span>
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon></LocationOnIcon>
              <span>Viet Nam</span>
            </p>
          </div>

          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon></CalendarTodayIcon>
              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filte ">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup name="food_type" value={foodType}
                onChange={handleFilter}>
                  {foodTypes.map((item)=> 
                    <FormControlLabel
                    key={item.value}
                      value={item.value}
                      control={<Radio/>}
                      label={item.label}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                // onChange={}
                // name=""
                // value={}
                >
                  {categories.map((item)=> 
                    <FormControlLabel
                    key={item}
                      value={item}
                      control={<Radio/>}
                      label={item}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </div>
            </div>
          </div>
          
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
    </div>
  );
}
