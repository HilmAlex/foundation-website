import { Button, Flex, Heading, Input, useColorMode } from "@chakra-ui/react";

const Login = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray .100" p={12} rounded={6}>
        <Heading mb={6} textAlign='center'>Log in</Heading>
        <Input
          placeholder="lazar@chakra-ui.com"
          variant="filled"
          mb={3}
          type="email"
        ></Input>
        <Input
          placeholder="**********"
          variant="filled"
          mb={3}
          type="password"
        ></Input>
        <Button mb={6} colorScheme="teal">Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
};

export default Login;
