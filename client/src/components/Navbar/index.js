import { useState } from "react";
import { Link } from "react-router-dom";

import { FaUsers, HiMenu, FaTimes, MdPersonAdd } from "assets/icons";
import {
  StyledNavbar,
  Container,
  Brand,
  Actions,
  MobileIcon,
} from "./Navbar.styles";

import NavigationLinks from "./NavigationLinks";
import Button from "components/Button";

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
