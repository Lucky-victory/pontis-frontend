import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
const PageWrap = ({
  children,
  mw,
  ...props
}: {
  children: ReactNode;
  mw?: number | string;
}) => {
  return (
    <Box
      inset={0}
      p={1}
      pos="fixed"
      minH={"600"}
      bgGradient={"linear(to-r,#000,brand.300)"}
    >
      <Box
        gap={6}
        pt={"30px"}
        overflowY={"auto"}
        h={"full"}
        bg={"whiteAlpha.400"}
        backdropFilter={"blur(30px)"}
        borderRadius={"lg"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageWrap;
