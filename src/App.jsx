import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import PostBox from "./components/PostBox";
import Posts from "./components/Posts";
import ThemeButton from "./components/ThemeButton";

const App = () => {
  const [postData, setPostData] = React.useState([
    {
      username: "ElonMusk",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
      status: "Feeling good?",
      gif: "https://media4.giphy.com/media/bPtqSMm6DheaXpYWfR/giphy.gif?cid=d8e10f34nyo0hw21waf6h8ragucgwtxcwvi1szqkkq027fxj&rid=giphy.gif&ct=g",
    },
  ]);
  return (
    <Box
      bgColor={useColorModeValue("gray.200", "#222222")}
      minHeight={"100vh"}
      pb={14}
    >
      <Box>
        <Container>
          <ThemeButton />
          <PostBox setPostData={setPostData} postData={postData} />
          <Posts postData={postData} />
        </Container>
      </Box>
    </Box>
  );
};

export default App;
