import {
  Box,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box position={"absolute"} right="5" top="2">
      <IconButton
        onClick={toggleColorMode}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        colorScheme={useColorModeValue("purple", "orange")}
      />
    </Box>
  );
};

export default ThemeButton;
