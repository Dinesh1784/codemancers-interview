import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Avatar,
  Input,
  Center,
  Image,
} from "@chakra-ui/react";
import GifComponent from "./GifComponent";
import { GiphyFetch } from "@giphy/js-fetch-api";

const CustomModal = ({ isOpen, onClose, setPostData, postData }) => {
  const [showGif, setShowGif] = React.useState(false);
  const [gvalue, setGValue] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const [selectedGif, setSelectedGif] = React.useState("");
  const [statusText, setStatusText] = React.useState("");

  const gf = new GiphyFetch("skg4LhLBEZulJD25xOxLZFQRxCHAV2Yy");
  const searchGif = async () => {
    const { data } = await gf.search(gvalue, { limit: 30 });
    setSearchData(data);
  };

  const onPost = () => {
    if (!selectedGif || !statusText) {
      alert("gif and status could not be null");
      return;
    }
    const newPost = {
      username: "ElonMusk",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
      status: statusText,
      gif: selectedGif,
    };
    setPostData([...postData, newPost]);
    setSelectedGif("");
    setStatusText("");
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setShowGif(false);
          setGValue("");
          setSearchData([]);
          setSelectedGif("");
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} alignItems={"center"}>
              <Avatar
                name="elon musk"
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
              />
              <Text ml={2} fontWeight={"400"}>
                Elon Musk
              </Text>
            </Box>

            <Box>
              <Input
                mt={4}
                placeholder="write something here..."
                type="text"
                value={statusText}
                onChange={(e) => setStatusText(e.target.value)}
              />
              {selectedGif && (
                <Image src={selectedGif} width="100%" height="250px" mt={2} />
              )}
              <Center mt={2}>
                <Text>or</Text>
              </Center>
              {!showGif && (
                <Button mt={3} isFullWidth onClick={() => setShowGif(!showGif)}>
                  GIF
                </Button>
              )}

              {showGif && (
                <Box mt={3}>
                  <Input
                    type="text"
                    placeholder="Search GIF..."
                    value={gvalue}
                    onChange={(e) => setGValue(e.target.value)}
                    onKeyPress={searchGif}
                  />
                  <GifComponent
                    searchData={searchData}
                    selectedGifImage={setSelectedGif}
                  />
                </Box>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="telegram"
              onClick={() => {
                onClose();
                onPost();
              }}
              isFullWidth
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CustomModal;
