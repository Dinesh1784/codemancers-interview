import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import {
  Avatar,
  Box,
  Input,
  useColorModeValue,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CustomModal from "./CustomModal";

const PostBox = ({ setPostData, postData }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box pt={{ base: "16", md: "10" }}>
      <Box
        bg={useColorModeValue("whiteAlpha.900", "gray.700")}
        borderRadius={10}
      >
        <Box display={"flex"} alignItems={"center"} p={4}>
          <Avatar
            name="elon musk"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
          />
          <Box flex={"1"} ml={3}>
            <Input
              type={"text"}
              placeholder="write something here..."
              borderRadius={20}
              onClick={onOpen}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ base: "space-between", md: "space-around" }}
          p={4}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <BsCameraVideo size={25} color="#f3425f" />
            <Text pl={2} fontSize={{ base: 12, md: 15 }}>
              Live Video
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <IoMdPhotos size={25} color="#45BD62" />
            <Text pl={2} fontSize={{ base: 12, md: 15 }}>
              Photo/video
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <FiSmile size={25} color="#F9CB5E" />
            <Text pl={2} fontSize={{ base: 12, md: 15 }}>
              Feeling/Activity
            </Text>
          </Box>
        </Box>
      </Box>
      <CustomModal
        onClose={onClose}
        isOpen={isOpen}
        setPostData={setPostData}
        postData={postData}
      />
    </Box>
  );
};

export default PostBox;
