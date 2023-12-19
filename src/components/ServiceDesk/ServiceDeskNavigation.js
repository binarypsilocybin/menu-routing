import React from "react";
import { Link } from "react-router-dom";

//Import chakra
import { Button, Stack } from "@chakra-ui/react";

function ServiceDesk() {
  return (
    <div>
      <Stack direction="row">
        <Button colorScheme={"orange"} size="lg">
          <Link to="/servicedesk/tickets">Tickets</Link>
        </Button>
        <Button colorScheme={"orange"} size="lg">
          <Link to="/servicedesk/extrawork">Extrawork</Link>
        </Button>
        <Button colorScheme={"orange"} size="lg">
          <Link to="/servicedesk/suporte">Suporte</Link>
        </Button>
        <Button colorScheme={"orange"} size="lg">
          <Link to="/servicedesk/contratos">Contratos</Link>
        </Button>
      </Stack>
    </div>
  );
}

export default ServiceDesk;
