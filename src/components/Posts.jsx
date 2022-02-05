import { Box } from "@chakra-ui/react";
import Post from "./Post";
import React from "react";

const Posts = ({ postData }) => {
  return (
    <Box>
      {postData.map((data, index) => (
        <Post key={index} data={data} />
      ))}
    </Box>
  );
};

export default Posts;
