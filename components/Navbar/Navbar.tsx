import { Box, Image } from "@chakra-ui/react";
// import brandLogo from '@assets/brandLogo'

const Navbar = () => {
    return (
        <Box d='flex' alignItems='center' justifyContent='space-between' ml={6} mr={6}>
            <Box>
                <Image boxSize='90px' src='brandLogo' alt='brand logo'/>
            </Box>
            <Box></Box>
        </Box>
    )
}

export default Navbar
