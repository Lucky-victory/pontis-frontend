import './globals.css'
import type { Metadata } from 'next'
import { Inter,Fredoka } from 'next/font/google'
import { ChakraProvider } from './providers/chakra-provider'

const inter = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X-NFT',
  description: 'Bridge, Mint and Swap NFTS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>

        {children}
        </ChakraProvider>
      
      </body>
    </html>
  )
}
