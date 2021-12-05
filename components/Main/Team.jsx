import React from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ProjectItem } from "./ProjectItem";
import { TeamItem } from "./TeamItem";

const Team = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      id="sobre-nosotros"
      bg="#FFFF"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            justifyContent="center"
          >
            <Text color={"blue.400"} textAlign="center">
              Equipo
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            textAlign="center"
          >
            Nuestro equipo está formado por profesionales apasionados en ayudar
            a la comundiad
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <TeamItem
              src="/images/maria.png"
              name="MARIA ZAMORA"
              title="Presidenta"
              description="Líder de la Corporación Nueva Siembra"
            />
            <TeamItem
              src="/images/eduard.png"
              name="EDUARD CORTÉS"
              title="Secretario"
              description="LÍDER PARA LA FORMACIÓN EN VALORES"
            />
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

export default Team;
