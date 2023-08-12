
'use client'
import CollectionCards from '@/app/components/CollectionCards'
import Navbar from '@/app/components/Navbar'
import PageWrap from '@/app/components/PageWrap'
import { Box, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'

const BridgePage = () => {
  return (
    <>
    <Navbar/>
    <PageWrap>

    <Box>
  <Flex  mt={'90px'}  >
    <Flex gap={6} mx={'auto'}>

    <Box maxW={900} mb={6} boxShadow={'base'} pb={6} borderRadius={'lg'} bg={'blackAlpha.500'}>
<Flex gap={6} bg={'brand.900'} p={4} borderTopRadius={'lg'} mb={4} align={'center'}>

<Text as='strong' letterSpacing={'wider'}>Your NFTs on </Text>
 <Menu colorScheme='brand'>
  <MenuButton border={'1px'} fontWeight={'medium'} borderColor={'gray.500'} borderRadius={'full'} minW={'120px'} px={6} py={2} bg={'gray.800'}>Chain</MenuButton>
  <MenuList><MenuItem name='departure-chain'> Polygon</MenuItem></MenuList>
</Menu>
</Flex>
<CollectionCards/>
    </Box>
    

    <Box  minW={280} boxShadow={'base'} borderRadius={'lg'} bg={'brand.900'} p={6}>
      right side
    </Box>
    </Flex>
  </Flex>
    </Box>
    </PageWrap>
    </>
  )
}

export default BridgePage