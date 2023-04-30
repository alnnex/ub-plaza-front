import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import React from "react";
import Image from "next/image";

export default function ReservedProducts(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalPrice = (current) => {
    let sum = 0;
    current.forEach((element) => {
      const itemTotal = element.price * element.noOfItems;
      sum = sum + itemTotal;
    });
    return sum;
  };

  return (
    <div>
      <IconButton
        colorScheme={"linkedin"}
        width={"fit-content"}
        height={"fit-content"}
        padding={"1"}
        onClick={onOpen}
        icon={<BiCart size={30} />}
      />

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxW={"50rem"}>
          <DrawerHeader>
            <Text>CART</Text>
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex gap={"2"} direction={"column"}>
              {props.reservedProducts &&
                props.reservedProducts?.map((current, Index) => (
                  <Flex
                    border={"1px"}
                    borderColor={"gray.300"}
                    direction={{ base: "column", sm: "row" }}
                    key={Index}
                  >
                    <Box width={{ base: "100%", sm: "10ch" }}>
                      <Image
                        width={500}
                        height={500}
                        alt={current.name}
                        style={{
                          aspectRatio: "1/1",
                          objectPosition: "center",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        src={current.pic}
                      />
                    </Box>

                    <Flex
                      width={"100%"}
                      justifyContent={"space-between"}
                      paddingX={"4"}
                      direction={{ base: "column", sm: "row" }}
                    >
                      <Flex direction={"column"}>
                        <small>Category: {current.category}</small>
                        <Text fontSize={{ base: "md", sm: "lg" }}>
                          {current.name}
                        </Text>

                        {current.variation && (
                          <Text>Variation: {current.variation}</Text>
                        )}
                      </Flex>
                      <Flex direction={"column"}>
                        <Text>Quantity: {current.noOfItems}</Text>
                        <Text color={"cyan.600"}>Price: P{current.price}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Text marginRight={"auto"} fontWeight={"semibold"} fontSize={"lg"}>
              Total: P{totalPrice(props.reservedProducts)}
            </Text>
            <Button colorScheme={"linkedin"}>Add to Reservations</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
