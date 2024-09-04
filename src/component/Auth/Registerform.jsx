import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../State/Authentidation/Action";
import { useDispatch } from "react-redux";
const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};
export const Registerform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Move useNavigate here to ensure it's defined

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerUser({ userData: values, navigate }));  // Pass navigate properly
  };
  return (
    <div>
      <Typography sx={{ mb: 3 }} variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
          ></Field>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
         
            <Field
            fullWidth
            margin="normal"
            name="role"
              as={Select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // onChange={handleChange}
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT"}>Restaurant</MenuItem>
            </Field>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, padding: "1rem" }}
          >
            Register
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        If have an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
          login
        </Button>
      </Typography>
    </div>
  );
};
