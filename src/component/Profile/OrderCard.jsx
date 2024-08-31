import { Button, Card } from "@mui/material";
import React from "react";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
        className="h-16 w-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHu4CyBachNAxN2ukLiM1H4DrUoD6DeoZWg&s"
          alt=""
        />
        <div>
          <p>Chicken</p>
          <p>$499</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
};
