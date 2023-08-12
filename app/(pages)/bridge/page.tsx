"use client";
import CollectionCards from "@/app/components/CollectionCards";
import Navbar from "@/app/components/Navbar";
import PageWrap from "@/app/components/PageWrap";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";

const BridgePage = () => {
  return (
    <>
      <Navbar />
      <PageWrap>
        <Box mx={"auto"} mt={"90px"} maxW={"1350px"} mb={6}>
          <Flex px={{ base: 4, lg: 6 }} wrap={"wrap"} gap={6} mx={"auto"}>
            <Box
              maxW={910}
              mb={6}
              boxShadow={"base"}
              pb={6}
              borderRadius={"lg"}
              bg={"blackAlpha.500"}
            >
              <Flex
                gap={6}
                bg={"brand.900"}
                p={4}
                borderTopRadius={"lg"}
                mb={4}
                align={"center"}
              >
                <Text fontSize={"xl"} as="strong" letterSpacing={"wider"}>
                  Your NFTs on{" "}
                </Text>
                <Menu>
                  <MenuButton
                    border={"1px"}
                    fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6}
                    py={2}
                    bg={"gray.800"}
                  >
                    Chain
                  </MenuButton>
                  <MenuList>
                    <MenuItem name="departure-chain"> Polygon</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <CollectionCards />
            </Box>

            <Box
              flex={1}
              minW={280}
              boxShadow={"base"}
              borderRadius={"lg"}
              bg={"black"}
              p={4}
            >
              <Flex
                gap={6}
                bg={"brand.900"}
                p={4}
                borderTopRadius={"lg"}
                mb={4}
                align={"center"}
              >
                <Text fontSize={"xl"} as="strong" letterSpacing={"wider"}>
                  Destination Chain{" "}
                </Text>
                <Menu>
                  <MenuButton
                    border={"1px"}
                    fontWeight={"medium"}
                    borderColor={"gray.500"}
                    borderRadius={"full"}
                    minW={"120px"}
                    px={6}
                    py={2}
                    bg={"gray.800"}
                  >
                    Chain
                  </MenuButton>
                  <MenuList>
                    <MenuItem name="departure-chain"> Polygon</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Stack my={4} minH={200} rounded={"lg"}>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  p={3}
                  rounded={"xl"}
                  bg={"gray.800"}
                >
                  <Text
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    My nft name name name neame name name anem
                  </Text>
                  <IconButton
                    variant={"ghost"}
                    icon={<MdDeleteOutline />}
                    aria-label="delete"
                  />
                </Flex>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  p={3}
                  rounded={"xl"}
                  bg={"gray.800"}
                >
                  <Text
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    My nft name name name neame name name anem
                  </Text>
                  <IconButton
                    variant={"ghost"}
                    icon={<MdDeleteOutline />}
                    aria-label="delete"
                  />
                </Flex>
              </Stack>
              <Flex w={"full"}>
                <Button
                  w={"full"}
                  mx={"auto"}
                  maxW={350}
                  size={"lg"}
                  rounded={"full"}
                  variant={"outline"}
                  letterSpacing={"widest"}
                >
                  Continue Bridge
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </PageWrap>
    </>
  );
};

export default BridgePage;
