import React from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid, GridItem, Image, Box } from "@chakra-ui/react";

const GifComponent = ({ searchData, selectedGifImage }) => {
  const [gifs, setGifs] = React.useState([]);
  const [selectedGif, setSelectedGif] = React.useState("");
  const gf = new GiphyFetch("skg4LhLBEZulJD25xOxLZFQRxCHAV2Yy");

  React.useEffect(() => {
    if (searchData.length !== 0) {
      setGifs(searchData);
    } else {
      const fetchGif = async () => {
        const { data } = await gf.trending({ limit: 30 });
        setGifs(data);
      };
      fetchGif();
    }
  });

  return (
    <Box maxH={"300px"} overflowY={"scroll"} mt={3}>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {gifs.map((gif) => (
          <GridItem key={gif.id}>
            <Box
              onClick={() => {
                setSelectedGif(gif.images.original.url);
                selectedGifImage(selectedGif);
              }}
            >
              <img src={gif.images.original.url} width="100px" height="100px" />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default GifComponent;
