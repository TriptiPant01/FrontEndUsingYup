import { Box, Typography, Avatar } from "@mui/material";
import React from "react";

export default function PostWidget({ title, commentedBy }) {
  return (
    <Box
      flexDirection="row"
      display="flex"
      //   justifyContent="center"
      alignItems="center"
      mt="5px"
      mb="7px"
      p="20px"
      sx={{
        backgroundColor: "grey",
        borderRadius: "10px",
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Avatar>{commentedBy}</Avatar>
      <Typography ml="10px">{title}</Typography>
    </Box>
  );
}
