import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";

export const ProjectItem = (props) => {
  return (
      <Flex direction="column" justifyContent='center' justifyItems='center'>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          w={useBreakpointValue(["60px", " 80px"])}
          src={props.src}
        />
        <Text ali>{props.title}</Text>
      </Flex>
  );
};

