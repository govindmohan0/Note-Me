// src/components/Resources/Notes.jsx
import React from "react";
import IDE from "../IDE/IDE.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../IDE/theme.js";

const Notes = () => (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <IDE />
    </ChakraProvider>
  </React.StrictMode>
);

export default Notes;
