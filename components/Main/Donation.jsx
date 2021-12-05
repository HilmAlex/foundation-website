import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

const style = `display=flex;
justify-content=center`;

export const Donation = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      id="donaciones"
      bg="#FFF"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            display="flex"
            justifyContent={useBreakpointValue(["center", "start"])}
          >
            <Text color={"blue.400"} as={"span"}>
              Apóyanos
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            display="flex"
            textAlign={useBreakpointValue(["center", "left"])}
          >
            Contribuye con tu granito de arena y mejora la vida de muchas
            personas. Con tu apoyo seguiremos creando proyectos en beneficio de
            la comunidad. Si haces una donación, constarás en nuestra lista de
            patrocinadores y los beneficiarios te lo agradecerán eternamente.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link href="https://www.paypal.com" target="_blank">
              <a
                rel="noreferrer"
                target="_blank"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => {}}
                >
                  Realizar una Donación
                </Button>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Image
          alt={"Donation Image"}
          src={"/images/charity.jpg"}
          width="90%"
          height="50vh"
          mr="10px"
          boxShadow={"2xl"}
          rounded={"lg"}
        />
      </Flex>
    </Stack>
  );
};
