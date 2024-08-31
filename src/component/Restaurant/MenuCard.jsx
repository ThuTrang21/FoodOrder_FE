import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
const ingredients = [
  {
    category: "Đồ ăn kèm",
    ingredients: ["Khoai tây"],
  },
  {
    category: "Nước uống",
    ingredients: ["Coca Cola", "Pepsi"],
  },
];

const MenuCard = () =>{
    const handleCheckBoxChange=(value)=>{
        console.log(value);
    }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5 ">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHu4CyBachNAxN2ukLiM1H4DrUoD6DeoZWg&s"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Chicken</p>
              <p>499$</p>
              <p className="text-gray-400">nice food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredients.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item) => (
                    <FormControlLabel
                      control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>}
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button type="submit" variant="contained" disabled={false}>
                {true?"Add to Cart":"Out Of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
