import { Flex } from "@chakra-ui/react";
import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuLinks = () => {
  return (
    <Flex
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 2, 0, 0]}
      fontFamily="Montserrat"
      fontSize={{ base: "10px", md: "14px", lg: "16px" }}
      fontWeight={700}
    >
      {/* TODO:  scrolling*/}
      <MenuItem to="#sobre-nosotros">Conócenos</MenuItem>
      <MenuItem to="#proyectos">Proyectos</MenuItem>
      <MenuItem to="#donaciones" isLast={true}>Apóyanos</MenuItem>
      {/* <MenuItem to="#patrocinadores">Patrocinadores</MenuItem>
      <MenuItem to="#blog" isLast={true}>
        Blog
      </MenuItem> */}
    </Flex>
  );
};
