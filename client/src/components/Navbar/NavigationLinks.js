import { Links, StyledLink } from "./Navbar.styles";

const NavigationLinks = ({ showMenu, setShowMenu, user }) => {
  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <Links show={showMenu}>
      <StyledLink to="/create" onClick={() => closeMobileMenu()}>
        New User
      </StyledLink>
    </Links>
  );
};

export default NavigationLinks;
