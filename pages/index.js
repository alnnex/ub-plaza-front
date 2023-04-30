import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiShirtLine, RiBook2Line } from "react-icons/ri";
import { BiBlock } from "react-icons/bi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "@/components/modals/Product";
import ReservedProducts from "@/components/modals/ReservedProducts";

const items = [
  {
    name: "Filipino 1",
    category: "Book",
    size: [],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651876/cld-sample-5.jpg",
    price: 100,
  },
  {
    name: "English 1",
    category: "Book",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651875/cld-sample-4.jpg",
    price: 100,
  },
  {
    name: "College Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651874/cld-sample-2.jpg",
    price: 100,
  },
  {
    name: "Junior High Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651851/samples/ecommerce/analog-classic.jpg",
    price: 100,
  },
  {
    name: "Filipino 1",
    category: "Book",
    size: [],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651876/cld-sample-5.jpg",
    price: 100,
  },
  {
    name: "English 1",
    category: "Book",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651875/cld-sample-4.jpg",
    price: 100,
  },
  {
    name: "College Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651874/cld-sample-2.jpg",
    price: 100,
  },
  {
    name: "Junior High Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651851/samples/ecommerce/analog-classic.jpg",
    price: 100,
  },
  {
    name: "Filipino 1",
    category: "Book",
    size: [],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651876/cld-sample-5.jpg",
    price: 100,
  },
  {
    name: "English 1",
    category: "Book",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651875/cld-sample-4.jpg",
    price: 100,
  },
  {
    name: "College Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651874/cld-sample-2.jpg",
    price: 100,
  },
  {
    name: "Junior High Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651851/samples/ecommerce/analog-classic.jpg",
    price: 100,
  },
  {
    name: "Filipino 1",
    category: "Book",
    size: [],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651876/cld-sample-5.jpg",
    price: 100,
  },
  {
    name: "English 1",
    category: "Book",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651875/cld-sample-4.jpg",
    price: 100,
  },
  {
    name: "College Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651874/cld-sample-2.jpg",
    price: 100,
  },
  {
    name: "Junior High Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651851/samples/ecommerce/analog-classic.jpg",
    price: 100,
  },
  {
    name: "Filipino 1",
    category: "Book",
    size: [],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651876/cld-sample-5.jpg",
    price: 100,
  },
  {
    name: "English 1",
    category: "Book",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651875/cld-sample-4.jpg",
    price: 100,
  },
  {
    name: "College Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651874/cld-sample-2.jpg",
    price: 100,
  },
  {
    name: "Junior High Uniform Polo",
    category: "Uniform",
    size: ["small", "medium", "large", "xl", "xxl"],
    stock: "10",
    pic: "https://res.cloudinary.com/alnnex/image/upload/v1660651851/samples/ecommerce/analog-classic.jpg",
    price: 100,
  },
];

const categories = [
  { category: "All", icon: <BiBlock size={30} /> },
  { category: "Uniform", icon: <RiShirtLine size={30} /> },
  { category: "Book", icon: <RiBook2Line size={30} /> },
];
export default function Home() {
  const [categorySelected, setCategorySelected] = useState("All");
  const [navScrolling, setNavScrolling] = useState(false);
  const [reservedProducts, setReservedProducts] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  });

  const changeBg = () => {
    if (window.scrollY >= 90) {
      setNavScrolling(true);
    } else {
      setNavScrolling(false);
    }
  };

  return (
    <Box
      position={"relative"}
      padding={"4"}
      paddingX={"10"}
      minHeight={{ base: "cal(100vh - 56px)", md: "100vh" }}
    >
      <Box width={"100%"} marginX={"auto"}>
        <Text
          fontSize={"2xl"}
          fontWeight={"semibold"}
          color={"gray.700"}
          marginY={"auto"}
          // align={"center"}
        >
          Categories:
        </Text>
        <Flex
          wrap={"wrap"}
          gap={"2"}
          marginBottom={"7"}
          marginTop={"2"}
          justifyContent={"space-between"}
        >
          {/* <IconButton
            colorScheme={"linkedin"}
            width={"fit-content"}
            height={"fit-content"}
            padding={"2"}
            icon={<BiBlock size={70} />}
            onClick={()
               => setCategorySelected("All")}
          /> */}

          <Flex gap={"2"} wrap={"wrap"}>
            {categories.map((current) => (
              <IconButton
                key={current.category}
                colorScheme={"linkedin"}
                width={"fit-content"}
                height={"fit-content"}
                padding={"1"}
                icon={current.icon}
                onClick={() => setCategorySelected(current.category)}
              />
            ))}
          </Flex>
          {/* <IconButton
            colorScheme={"linkedin"}
            width={"fit-content"}
            height={"fit-content"}
            padding={"1"}
            icon={<BiCart size={50} />}
            onClick={() => setCategorySelected("All")}
          /> */}

          <ReservedProducts reservedProducts={reservedProducts} />
        </Flex>
      </Box>

      <Flex gap={"4"} wrap={"wrap"} justifyContent={"space-evenly"}>
        {items
          .filter((item) => {
            if (categorySelected === "All") {
              return item.category.toLowerCase() !== "All";
            }
            return (
              item.category.toLowerCase() === categorySelected.toLowerCase()
            );
          })
          .map((current, Index) => (
            <Box key={Index}>
              <Product
                product={current}
                setReservedProducts={setReservedProducts}
                reservedProducts={reservedProducts}
              >
                <Flex
                  cursor={"pointer"}
                  _hover={{
                    base: { transform: "scale(1)" },
                    sm: { transform: "scale(1.1)" },
                  }}
                  transition={"ease-in 0.1s"}
                  direction={"column"}
                  width={{ base: "100%", sm: "25ch" }}
                  border={"1px"}
                  borderColor={"gray.200"}
                  boxShadow={"lg"}
                >
                  <Image
                    width={400}
                    height={400}
                    src={current.pic}
                    alt={current.name}
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <Box padding={"2"}>
                    <small>Category: {current.category}</small>
                    <Text height={"5ch"}>{current.name}</Text>
                    <Text color={"cyan.600"}>Price: P{current.price}</Text>
                  </Box>
                </Flex>
              </Product>
            </Box>
          ))}
      </Flex>
    </Box>
  );
}
