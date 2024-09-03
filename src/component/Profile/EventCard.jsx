import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 300 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://afamilycdn.com/150157425591193600/2023/7/6/photo-1-16886400510221850077217-1688663873246-16886638740951195746886.png"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">VietNam fast food</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"VietNam"}</p>
            <p className="text-sm text-blue-500">February 14, 2024 12:00 AM</p>
            <p className="text-sm text-red-500">February 15, 2024 12:00 AM</p>
          </div>
        </CardContent>
        {false &&  <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
       <p>sfsdfsdf</p>
      </Card>
    </div>
  );
};
