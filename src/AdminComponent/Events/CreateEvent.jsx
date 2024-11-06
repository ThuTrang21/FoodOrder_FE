import { Button, Grid, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEventAction } from "../../State/Restaurant/Action";
const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null,
};

const CreateEvent = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, menu } = useSelector((store) => store);

  const [formValues, setFormValues] = useState(initialValues);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createEventAction({
        data: formValues,
        restaurantId: restaurant.usersRestaurant?.id,
      jwt
      
      })
    );
    console.log(formValues);
    setFormValues(initialValues);
  };
  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleDateChange = (date, dateType) => {
    const formattedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A");
    setFormValues({
      ...formValues,
      [dateType]: formattedDate,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="image"
              name="image"
              label="Image URL"
              variant="outlined"
              onChange={handleFormChange}
              value={formValues.image}
              size="small"
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Event Name"
              variant="outlined"
              onChange={handleFormChange}
              value={formValues.name}
              size="small"
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="location"
              name="location"
              label="Location"
              variant="outlined"
              onChange={handleFormChange}
              value={formValues.location}
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} size="small" />}
                label="Start Date and Time"
                value={
                  formValues.startedAt ? dayjs(formValues.startedAt) : null
                }
                onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                inputFormat="MMMM DD, YYYY hh:mm A"
                className="w-full"
                sx={{ width: "100%" }}
                size="small"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} size="small" />}
                label="End Date and Time"
                value={formValues.endsAt ? dayjs(formValues.endsAt) : null}
                onChange={(newValue) => handleDateChange(newValue, "endsAt")}
                inputFormat="MMMM DD, YYYY hh:mm A"
                className="w-full"
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <div className="flex justify-center">
          <Button
            className="text-justify"
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
