import { Box, Divider, Typography, InputBase, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, updatedPosts } from "../../state";
import { useState } from "react";
import PostsWidget from "./PostsWidget";

const MyPostWidget = ({}) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.auth.user);
  const { token } = useSelector((state) => state.auth);

  const handlePost = async () => {
    const data = { title: post };
    const req = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`http://localhost:4000/api/post`, req);

    const posts = await response.json();
    dispatch(updatedPosts(posts));
    // dispatch(setPosts({ posts }));
    setPost("");
  };

  return (
    <Box width="100%" backgroundColor="white" mb="10px" mt="20px">
      <Box
        width="100%"
        sx={{
          borderWidth: "1px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "grey",
          borderRadius: "10px",
          p: "15px",
        }}
      >
        <InputBase
          placeholder="Whats on Your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
          }}
        />
        <Button onClick={() => handlePost()}>Post</Button>
      </Box>
      <PostsWidget />
    </Box>
  );
};

export default MyPostWidget;
