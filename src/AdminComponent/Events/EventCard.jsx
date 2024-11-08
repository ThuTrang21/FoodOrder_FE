import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteEventAction } from "../../State/Restaurant/Action";

export const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleDelteEvent=()=>{
    dispatch(deleteEventAction({
      eventId:event.id,
      jwt
    }))
  }
  return (
    <div>
      <Card sx={{ width: 300 }}>
        <CardMedia sx={{ height: 300 }} image={event.image}></CardMedia>
        <CardContent>
          <Typography variant="h5">{event.restaurant?.name}</Typography>
          <Typography variant="body2">{event.name}</Typography>
          <div className="py-2 space-y-2">
            <p>{event.location}</p>
            <p className="text-sm text-blue-500">{event.startedAt}</p>
            <p className="text-sm text-red-500">{event.endsAt}</p>
          </div>
        </CardContent>
        <CardActions>
          <IconButton onClick={()=>handleDelteEvent()}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
