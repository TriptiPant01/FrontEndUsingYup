import { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

const resgisterSchema = yup.object().shape({
  fullname: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValueRegister = {
  fullname: "",
  email: "",
  password: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const FormInput = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const regisetAPI = async (values, onsubmitProps) => {
    const savedUserResponse = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    const savedUser = await savedUserResponse.json();
    onsubmitProps.resetForm();
    if (savedUser) {
      setPageType("login");
    }
  };
  const loginAPI = async (values, onsubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const isLoggedIn = await loggedInResponse.json();
    onsubmitProps.resetForm();
    if (isLoggedIn) {
      dispatch(
        setLogin({
          user: isLoggedIn.userDetail,
          token: isLoggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onsubmitProps) => {
    if (isLogin) await loginAPI(values, onsubmitProps);
    if (isRegister) await regisetAPI(values, onsubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValueRegister}
      validationSchema={isLogin ? loginSchema : resgisterSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            width="80%"
            m="auto"
            justifyContent="center"
            // alignItems="center"
          >
            {isRegister && (
              <>
                <TextField
                  label="FullName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="fullname"
                  error={Boolean(touched.fullname) && Boolean(errors.fullname)}
                  helperText={touched.fullname && errors.fullname}
                />
                <TextField
                  label="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  label="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.fullname}
                />
              </>
            )}
            {isLogin && (
              <>
                <TextField
                  label="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  label="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.fullname}
                />
              </>
            )}
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "10px",

                p: "10px",
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
            >
              {isLogin
                ? "Don't' have an account? Sing Up here."
                : "Already have an account? Login here"}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default FormInput;
