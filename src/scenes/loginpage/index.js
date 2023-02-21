import { Box, Typography } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  return (
    <Box>
      <Box
        width="90%"
        p="2%"
        borderRadius="10px"
        display="flex"
        justifyContent="center"
      >
        <Typography fontWeight="500" variant="h5">
          Welcome to Login Page
        </Typography>
      </Box>
      <Form />
    </Box>
  );
};
export default LoginPage;
