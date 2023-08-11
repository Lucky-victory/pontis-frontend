'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar'
import { Box } from '@chakra-ui/react'
export default function Home() {
  return (
    <Box as='main' className={styles.main}  px={4}>
      <Navbar/>
      <Box borderRadius={'md'} mt={'80px'} h={'400'} bg={'white'} backdropBlur={'lg'} backdropFilter={'auto'}>

</Box>
           </Box>
  )
}
