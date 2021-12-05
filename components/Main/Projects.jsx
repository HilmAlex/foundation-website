import { Button, Stack, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import React from "react";
import { ProjectItem } from "./ProjectItem";
import { useBreakpointValue } from "@chakra-ui/media-query";

const Projects = () => {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      id="proyectos"
      bg="linear-gradient(180deg, rgba(69, 194, 178, 0.95) 5.49%, rgba(255, 255, 255, 0.8645) 77.46%)"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w="70vw">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              color={"blue.400"}
              as={"span"}
              display="flex"
              justifyContent="center"
            >
              Proyectos que Realizamos
            </Text>{" "}
          </Heading>

          <Grid
            gap="1rem"
            gridAutoRows="10rem"
            templateColumns="repeat(auto-fill, minmax(15rem,1fr))"
            justifyItems="center"
            alignItems='center'
            padding="10px"
          >
            <ProjectItem title="Deportivos" src="/logos/deportive.png" />
            <ProjectItem title="Ambientales" src="/logos/trees.png"/>
            <ProjectItem title="Productivos" src="/logos/shop.png"/>
            <ProjectItem title="Culturales" src="/logos/cultural.png"/>
            <ProjectItem title="Turismo Comunitario" src="/logos/mountain.png"/>
            <ProjectItem title="Arte Literario" src="/logos/book.png"/>
          </Grid>

          <Stack direction={{ base: "column", md: "row" }} spacing={4} justifyContent='center'>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              rightIcon={<CalendarIcon />}
              onClick={() => {}}
            >
              Inscríbete
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Projects;
