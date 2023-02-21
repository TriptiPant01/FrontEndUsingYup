import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPosts } from "../../state";
import PostWidget from "./PostWidget";

const PostsWidget = ({}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.auth.posts);
  const token = useSelector((state) => state.auth.token);

  const getPosts = async () => {
    const response = await fetch(`http://localhost:4000/api/post`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <>
      {posts?.map(({ title, _id, postedBy }) => {
        return (
          <PostWidget title={title} key={_id} commentedBy={postedBy.fullname} />
        );
      })}
    </>
  );
};

export default PostsWidget;
