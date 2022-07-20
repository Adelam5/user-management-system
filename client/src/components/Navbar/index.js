import { useState } from "react";

import { FaUsers, HiMenu, FaTimes, MdPersonAdd } from "assets/icons";

import {
  StyledNavbar,
  Container,
  Brand,
  Actions,
  MobileIcon,
} from "./Navbar.styles";

import Button from "components/Button";

import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledNavbar>
      <Container>
        <Brand to="/">
          <FaUsers />
          <span>Users Management System</span>
        </Brand>
        <NavigationLinks showMenu={showMenu} setShowMenu={setShowMenu} />
        <Actions>
          <Button
            as={Link}
            to="/create"
            label={
              <>
                <MdPersonAdd /> New User
              </>
            }
          />
          <MobileIcon onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <FaTimes /> : <HiMenu />}
          </MobileIcon>
        </Actions>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
