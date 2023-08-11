import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
const PageWrap = ({children,mw}:{children:ReactNode,mw?:number|string}) => {
  return (
    
    <Box mx={'auto'} mb={{base:6,lg:8}} maxW={mw} borderRadius={{base:'md',lg:'lg'}} mt={'90px'} minH={'400'} bg={'white'} >
{children}
    </Box>
  )
}

export default PageWrap