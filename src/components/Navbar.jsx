import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" py={4}>
      <Flex maxW="container.xl" mx="auto" justifyContent="space-around">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/history" color="white" fontWeight="bold">
          History
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;