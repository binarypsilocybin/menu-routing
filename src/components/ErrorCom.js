import React from "react";

//import chakra
import { Text, Stack } from "@chakra-ui/react";

function ErrorCom() {
  return (
    <main>
      <Stack spacing={3}>
        <Text fontSize="xl">
          There's was some error, please contact admin for more details!
        </Text>
      </Stack>
    </main>
  );
}

export default ErrorCom;
