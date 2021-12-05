import React from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { ProjectItem } from "./ProjectItem";
import { MdLocationOn } from "react-icons/md";
import { color } from "../utils/Colors";

export const Contact = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      id="contacto"
      bg="#FFFF"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            justifyContent="center"
          >
            <Text color={"blue.400"} textAlign="center">
              Contáctanos
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            textAlign="center"
          >
            
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            bg={color.lightGreen}
            boxShadow={'2xl'}
            rounded={'lg'}
          >
            <VStack pl={0} spacing={3} alignItems="flex-start">
              <Button
                size="md"
                height="48px"
                width="300px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<PhoneIcon color="#1970F1" size="20px" />}
              >
                +593 96 364 9815
              </Button>
              <Button
                size="md"
                height="48px"
                width="300px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<EmailIcon color="#1970F1" size="20px" />}
              >
                nuevasiembra.corp@gmail.com
              </Button>
              <Button
                size="md"
                height="48px"
                width="300px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
              >
                Quito, Ecuador
              </Button>
            </VStack>
          </Stack>
          {/* <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={() => {}}
            >
              Ver Estatutos
            </Button>
          </Stack> */}
        </Stack>
      </Flex>
    </Stack>
  );
};
