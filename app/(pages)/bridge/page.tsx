"use client";
import CollectionCards from "@/app/components/CollectionCards";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import PageWrap from "@/app/components/PageWrap";
import { RootState } from "@/app/state/store";
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
import { useSelector} from 'react-redux'
const BridgePage = () => {

  const selectedCollections=useSelector<RootState,any[]>((state)=>state.bridgeCollection.data)
  
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
              <CollectionCards collections={[0,1,2,3]} />
            </Box>

            <Box
              flex={1}
              minW={280}
              boxShadow={"base"}
              borderRadius={"lg"}
              bg={"black"}
              maxW={450}
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
                    <MenuItem name="destination-chain"> Polygon</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Box 
              p={4}
              >

              <Stack my={4} minH={200} rounded={"lg"}>
                {selectedCollections.map((coll)=>{
                  
              return  <Flex key={crypto.randomUUID()}
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
                   collection {coll}
                  </Text>
                  <IconButton
                    variant={"ghost"}
                    icon={<MdDeleteOutline />}
                    aria-label="delete"
                  />
                </Flex>
              })}
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  px={3}
                  py={6}
                  rounded={"xl"}
                  bg={"gray.500"}
                >
              </Stack>
                  <Text color={'gray.300'}
fontSize={'xl'}
                  >
                    No selected collections
                  </Text>
                 
                </Flex>
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
            </Box>

          </Flex>
        </Box>
      </PageWrap>
      <Footer/>
    </>
  );
};

export default BridgePage;
