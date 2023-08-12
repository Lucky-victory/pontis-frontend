import { Flex } from "@chakra-ui/react";
import CollectionCard from "./CollectionCard";

const CollectionCards = () => {
  return (
    <Flex minH={450} py={4} px={4} gap={"4"} wrap={"wrap"}>
      {[0, 1, 2, 3].map((collection) => (
        <CollectionCard collection={collection} />
      ))}
    </Flex>
  );
};

export default CollectionCards;
