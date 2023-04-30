import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box maxWidth={"1600px"} marginX={"auto"}>
        <Nav />
        <Box
          width={{ base: "100%", md: "calc(100% - 30ch)" }}
          marginTop={{ base: "56px", md: "0px" }}
          marginLeft={"auto"}
        >
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
