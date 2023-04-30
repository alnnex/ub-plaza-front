import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

export default function Product(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [variations, setVariations] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleAdd = () => {
    let productToAdd = {
      name: props.product.name,
      pic: props.product.pic,
      category: props.product.category,
      price: props.product.price,
      variation: variations,
      noOfItems: itemQuantity,
    };

    props.setReservedProducts([...props.reservedProducts, productToAdd]);
    console.log(productToAdd);
    onClose();
  };
  return (
    <>
      {props.children && <Box onClick={onOpen}>{props.children}</Box>}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          maxWidth={"50em"}
          marginTop={{ base: "0", sm: "20" }}
          marginBottom={{ base: "0", sm: "20" }}
        >
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody paddingY={"6"}>
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={"3"}
              width={"100%"}
            >
              <Box>
                <Image
                  width={500}
                  height={500}
                  src={props.product.pic}
                  alt={props.product.name}
                  style={{
                    height: "100%",
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>

              <Flex direction={"column"} gap={"2"} width={"100%"}>
                <Text fontSize={"2xl"}>{props.product.name}</Text>
                <Text color={"cyan.600"}>Price: P{props.product.price}</Text>
                <Flex
                  marginTop={"auto"}
                  gap={"2"}
                  wrap={"wrap"}
                  justifyContent={"center"}
                >
                  {props.product.size.map((current, Index) => (
                    <Box
                      key={Index}
                      border={"1px"}
                      borderRadius={"lg"}
                      width={"10ch"}
                      cursor={"pointer"}
                      backgroundColor={
                        variations === current ? "linkedin.500" : "white"
                      }
                      color={variations === current ? "white" : "black"}
                      padding={"1"}
                      borderColor={"gray.300"}
                      _hover={{
                        backgroundColor: "linkedin.500",
                        color: "white",
                      }}
                      _active={{
                        backgroundColor: "linkedin.700",
                        color: "white",
                      }}
                      onClick={() => setVariations(current)}
                      transition={"ease-in 0.1s"}
                    >
                      <Text align={"center"}> {current}</Text>
                    </Box>
                  ))}
                </Flex>

                <NumberInput
                  display={"flex"}
                  gap={"2"}
                  size="lg"
                  maxW={"100%"}
                  value={itemQuantity}
                  min={1}
                  max={props.product.stock}
                  borderRadius={"none"}
                  alignContent={"center"}
                  keepWithinRange={true}
                  onChange={(event) => setItemQuantity(event)}
                >
                  <IconButton
                    colorScheme={"linkedin"}
                    alignSelf={"center"}
                    icon={<BiDownArrow />}
                    as={NumberDecrementStepper}
                  />
                  <NumberInputField borderRadius={"none"} />
                  <IconButton
                    colorScheme={"linkedin"}
                    alignSelf={"center"}
                    icon={<BiUpArrow />}
                    as={NumberIncrementStepper}
                  />
                </NumberInput>
                <small style={{ margin: "0 auto" }}>
                  Current Stocks: {props.product.stock}
                </small>

                <Button onClick={handleAdd} colorScheme={"linkedin"}>
                  Add to Cart
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
