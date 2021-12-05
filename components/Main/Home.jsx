import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import banner from "@assets/images/banner.jpg";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link"

function Home() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={banner.src}
      backgroundSize={"cover"}
      backgroundPosition={"center end"}
    >
      {/* TODO: Centrar alineacion del texto en mobile*/}
      <HStack
        w={"full"}
        height={"100vh"}
        justify={"start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack
          maxW={"2xl"}
          align={"flex-start"}
          spacing={6}
          pl="20px"
          pb="20px"
        >
          <Text
            color={"#050134"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            NUESTRA MISIÓN
          </Text>

          <Text
            color={"#050134"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "2xl",
              md: "3xl",
              lg: "4xl",
            })}
          >
            Desarrollar proyectos en
            <br />
            beneficio de la comunidad
          </Text>

          <Stack direction={"row"} alignSelf={"start"}>
            <Link href='#sobre-nosotros'>
              <Button
                bg={"#FFF3DE"}
                borderRadius="22px"
                color={"#050134"}
                _hover={{ bg: "#00C0A7" }}
                rightIcon={<ArrowForwardIcon />}
              >
                Más información
              </Button>
            </Link>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
}

export default Home;
