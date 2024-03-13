import React, { useState } from "react";
import { ChakraProvider, Box, Heading, FormControl, FormLabel, Input, Button, Stack, Alert, AlertIcon, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dupeStatus, setDupeStatus] = useState(null);

  // Mock dupe detection function
  const isDupe = (itemName, quantity) => {
    // For the sake of this example, we'll say an item is a dupe
    // if the quantity is above 64 (a stack) and it's an odd number
    return quantity > 64 && quantity % 2 !== 0;
  };

  const handleDupeCheck = () => {
    if (isDupe(itemName, parseInt(quantity, 10))) {
      setDupeStatus("Dupe detected!");
    } else {
      setDupeStatus("No dupes detected.");
    }
  };

  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Stack minH="100vh" p={3} direction="column" spacing={4} align="center" justify="center">
          <Heading as="h1" size="2xl" mb={6}>
            Minecraft Dupe Detector
          </Heading>
          <Image src="https://images.unsplash.com/photo-1555448049-8affc0fd79f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBibG9ja3N8ZW58MHx8fHwxNzEwMjg4NTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Minecraft Blocks" boxSize="200px" objectFit="cover" />
          <FormControl id="item-name">
            <FormLabel>Item Name</FormLabel>
            <Input value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Enter item name" />
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter quantity" />
          </FormControl>
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleDupeCheck}>
            Check for Dupes
          </Button>
          {dupeStatus && (
            <Alert status={dupeStatus.includes("detected") ? "error" : "success"}>
              <AlertIcon />
              {dupeStatus}
            </Alert>
          )}
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
