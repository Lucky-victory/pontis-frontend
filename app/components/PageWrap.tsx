import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
const PageWrap = ({children}:{children:ReactNode}) => {
  return (
    
    <Box borderRadius={'md'} mt={'80px'} h={'400'} bg={'white'} backdropBlur={'lg'} backdropFilter={'auto'}>
{children}
    </Box>
  )
}

export default PageWrap