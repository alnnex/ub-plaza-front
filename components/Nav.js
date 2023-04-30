import {
  Box,
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";

import React from "react";
import { FiHome, FiShoppingCart, FiShoppingBag, FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const LinkItems = [
  { name: "Home", icon: FiHome, linkPath: "/" },
  { name: "View Reservations", icon: BiSearch, linkPath: "/shop" },
];

const NavItem = ({ icon, children, linkPath, ...rest }) => {
  return (
    <Link href={linkPath}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const menuList = (
  <Flex height={"100%"} direction={"column"}>
    <Flex color={"cyan.700"} fontSize={"2xl"} align="center" p="4" mx="4">
      <Icon as={FiShoppingBag} />
      <Text>UB PLAZA</Text>
    </Flex>

    {LinkItems.map((current) => (
      <NavItem
        icon={current.icon}
        key={current.name}
        linkPath={current.linkPath}
      >
        {current.name}
      </NavItem>
    ))}
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
      marginTop={"auto"}
    >
      <Icon
        mr="4"
        fontSize="16"
        _groupHover={{
          color: "white",
        }}
        as={FiShoppingBag}
      />
      Login
    </Flex>
  </Flex>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={"fixed"}
        height={"100vh"}
        width={"30ch"}
        paddingY={"4"}
        shadow={"2xl"}
        display={{ base: "none", md: "inline" }}
      >
        {menuList}
      </Box>
      <Box
        width={"100%"}
        display={{ base: "inline", md: "none" }}
        position={"fixed"}
        padding={"2"}
        top={0}
        boxShadow={"lg"}
        zIndex={"99"}
        backgroundColor={"white"}
      >
        <Flex justifyContent={"space-between"} paddingX={"2"}>
          <Flex fontSize={"2xl"} align="center" color={"cyan.700"}>
            <Icon as={FiShoppingBag} />
            <Text>UB PLAZA</Text>
          </Flex>
          <IconButton variant={"ghost"} onClick={onOpen} icon={<FiMenu />} />
        </Flex>

        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>{menuList}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
