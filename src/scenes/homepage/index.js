import { Box } from "@mui/material";
import NavBar from "../navbar";
import { useSelector } from "react-redux";
import MyPost from "../widgets/MyPostWidget";

const HomePage = () => {
  const { _id } = useSelector((state) => state.auth.user);
  return (
    <Box>
      <NavBar />
      <Box
        width="50%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m="auto"
      >
        <MyPost />
      </Box>
    </Box>
  );
};

export default HomePage;
