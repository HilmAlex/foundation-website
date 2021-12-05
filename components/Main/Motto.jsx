import { Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";

const Motto = () => {
  return (
    <Stack
      minH={"20vh"}
      direction={{ base: "column", md: "row" }}
      id="lema"
      bg="#57C8BA"
    >
      <Flex height="40vh" align="center" justify="center" p={[10,15,20]}>
        <Text
          fontSize={{ base: "12px", md: "20px", lg: "30px" }}
          fontFamily="Montserrat"
          textAlign="center"
          pl={[0, 0, 6, 35]}
          lineHeight={useBreakpointValue(["25px", "20px", "41px"])}
          fontWeight='500'
        >
          “Nuestro compromiso es el desarrollo de proyectos socio-ambientales,
          de turismo comunitario, ciencia, arte, tecnología, cultura, producción
          industrial, artesanal y agrícola con buenas prácticas ciudadanas
          basados en los valores y principios morales”.
        </Text>
      </Flex>
    </Stack>
  );
};

export default Motto;
