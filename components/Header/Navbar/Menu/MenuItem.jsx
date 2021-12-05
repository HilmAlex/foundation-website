import Link from "next/link";
import { Text } from "@chakra-ui/react";

export const MenuItem = ({ children, isLast, to = "/" }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 4 }}
      display="block"
      color="#050134"
      _hover={{ color: "#00C0A7" }}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};
