import React from "react";
import { useNavigate } from "react-router-dom";

//import chakra
import { Button, Stack } from "@chakra-ui/react";

function HomePage() {
  const nagivate = useNavigate();

  const navigateServicedesk = () => {
    nagivate("/servicedesk");
  };

  return (
    <div>
      <h1>Hello, Welcome to GPrime</h1>
      <Stack direction="row">
        <Button
          mt="8"
          colorScheme={"orange"}
          size="lg"
          onClick={navigateServicedesk}
        >
          Service Desk
        </Button>
        <Button mt="8" colorScheme={"orange"} size="lg">
          Consulting
        </Button>
        <Button mt="8" colorScheme={"orange"} size="lg">
          Gestão de Projetos
        </Button>
        <Button mt="8" colorScheme={"orange"} size="lg">
          Css
        </Button>
        <Button mt="8" colorScheme={"orange"} size="lg">
          Comercial
        </Button>
      </Stack>
    </div>
  );
}

export default HomePage;
