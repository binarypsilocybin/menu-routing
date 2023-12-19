import React from "react";

//import chakra
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigations() {
  return (
    <header className={classes.header}>
      <Menu>
        <MenuButton as={Button}>Navigation 1</MenuButton>
        <MenuList>
          <MenuItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/servicedesk"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              ServiceDesk
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="consulting"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Consulting
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/gestaoprojetos"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Gestão de Projectos
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/css"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Css
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/comercial"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Comercial
            </NavLink>
          </MenuItem>
        </MenuList>
      </Menu>
      <Stack direction="row" mt="0">
        {/*  <Button colorScheme={"orange"} size="lg">
          item 1
        </Button>
        <Button colorScheme={"orange"} size="lg">
          item 2
        </Button>
        <Button colorScheme={"orange"} size="lg">
          item 3
        </Button>
        <Button colorScheme={"orange"} size="lg">
          item 4
        </Button> */}
      </Stack>
    </header>
  );
}

export default MainNavigations;
