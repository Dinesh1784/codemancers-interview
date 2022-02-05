import { Box, Text, Avatar, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Post = ({ data }) => {
  return (
    <Box
      bg={useColorModeValue("whiteAlpha.900", "gray.700")}
      style={{
        border: "1px solid lightgrey",
        borderRadius: "8px",
        margin: "10px",
        padding: "20px",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid lightgrey",
          paddingBottom: "10px",
        }}
      >
        <Avatar name="elon musk" src={data.avatar} />
        <Text ml={3}>@{data.username}</Text>
      </Box>
      <Box>
        <Text py={3}>{data.status}</Text>
        <Image
          src={data.gif}
          width={"100%"}
          height={"300px"}
          objectFit="cover"
          alt="gifff"
        />
      </Box>
    </Box>
  );
};

export default Post;
