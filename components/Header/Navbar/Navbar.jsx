const colors = {
  black: "#050134",
  lightGreen: "#00C0A7",
  green: "#B5D906",
  beige: "#FFF5E5",
};

import { Flex } from "@chakra-ui/react";
import { Logo } from "./Menu/Logo";
import { MenuToggle } from "./Menu/MenuToggle";
import { MenuButton } from "./Menu/MenuButton";
import Link from "next/link";

const NavBar = (props) => {
  return (
    <Flex
      pt={[2, 6]}
      pb={[2, 6]}
      pl={[4, 6, 8]}
      pr={[4, 6, 8]}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bgColor={colors.beige}
      position="fixed"
      zIndex={100}
      boxShadow="0 -1px 4px rgb(0 0 0 / 15%)"
    >
      {/* <Link href='#'>
        <Logo width="100%" height="100%" />
      </Link> */}

      <MenuToggle />

      <MenuButton />
    </Flex>
  );
};

export default NavBar;
