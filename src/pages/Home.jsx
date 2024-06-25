import { Box, Heading, Text, Image, Container, VStack } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa";

const Home = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to the World of Toys <FaGamepad />
          </Heading>
          <Text fontSize="xl">Discover the magic and joy of playtime!</Text>
        </Box>
        <Box>
          <Image src="https://source.unsplash.com/random/800x400/?toys" alt="Colorful toys" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Our Toy Collection
          </Heading>
          <Text fontSize="lg">
            Explore our vast collection of toys for all ages. From classic board games to the latest electronic gadgets, we have something for everyone!
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;