import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";

export const About = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      id="sobre-nosotros"
      bg="#FFF3DE"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text color={"blue.400"} as={"span"}>
              ¿Quiénes Somos?
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Somos una corporación que actúa en beneficio de emprendedores
            comprometidos con el arte, cultura, deportes, turismo comunitario,
            agricultura, medio ambiente y otro proyectos productivos de
            desarrollo comunitario.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              maxW="200px"
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              rightIcon={<DownloadIcon />}
              onClick={() => {}}
            >
              Ver Estatutos
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justifyContent="center">
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/images/about.png"}
          boxShadow={"2xl"}
          rounded={"lg"}
        />
      </Flex>
    </Stack>
  );
};
