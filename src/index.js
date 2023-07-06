// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { ChakraProvider, theme } from '@chakra-ui/react'
// import ReactDOM from "react-dom";
import { AuthContexProvider } from "./component/Login/authContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </BrowserRouter>
);
