import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const EventCard = ({ event }) => {

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={event.image}
        alt="Event image"
      />
      <CardContent>
        <Typography variant="h5">{event.restaurant?.name}</Typography>
        <Typography variant="body2">{event.name}</Typography>
        <div className="py-2 space-y-2">
        <p>{event.location}</p>
        <p className="text-sm text-blue-500">{event.startedAt}</p>
        <p className="text-sm text-red-500">{event.endsAt}</p>
        </div>
      </CardContent>
    </Card>
  );
};
