import { Box, Heading, Text, Container, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaHistory } from "react-icons/fa";

const History = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            The History of Toys <FaHistory />
          </Heading>
          <Text fontSize="xl">A journey through time in the world of play</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Timeline of Toy Evolution
          </Heading>
          <UnorderedList spacing={4}>
            <ListItem>
              <Text fontWeight="bold">Ancient Times:</Text>
              <Text>Simple toys made from natural materials like sticks and stones</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Middle Ages:</Text>
              <Text>Wooden toys and early board games gain popularity</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">19th Century:</Text>
              <Text>Industrial Revolution brings mass-produced toys</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">20th Century:</Text>
              <Text>Plastic toys, electronic games, and action figures emerge</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">21st Century:</Text>
              <Text>Digital toys and interactive experiences dominate the market</Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Container>
  );
};

export default History;