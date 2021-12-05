import { Button } from "@chakra-ui/button";
import React from "react";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/media-query";

export const MenuButton = () => {
  return (
    <Link href="#contacto">
      <Button
        color="#050134"
        bg="#B5D906"
        _hover={{ bg: "#00C0A7" }}
        fontSize={{ base: "10px", md: "12px", lg: "14px" }}
        size={useBreakpointValue(['sm', 'md'])}
      >
        Contáctanos
      </Button>
    </Link>
  );
};
