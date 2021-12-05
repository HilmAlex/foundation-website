import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import NavBar from './Navbar/Navbar';

const Header = (props) => {
  return (
    <NavBar/>
  );
};

export default Header;