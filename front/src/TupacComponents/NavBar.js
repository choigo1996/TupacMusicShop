import styled from "styled-components";
import { NavItem } from "./NavItem";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AlbumContext } from "./MusicShop";

const Container = styled.div`
  display: flex;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 5px;
  background-color: lightblue;
  &.active {
    background-color: dodgerblue;
    color: white;
  }
`;
export function NavBar() {
  const { loginState } = useContext(AlbumContext);

  return (
    <>
      <Container>
        <StyledNavLink to="/home">
          <NavItem icon="ti ti-home-2" name="Home" />
        </StyledNavLink>
        <StyledNavLink to="/products">
          <NavItem icon="ti ti-building-store" name="Music Shop" />
        </StyledNavLink>
        <StyledNavLink to="/dashboard">
          <NavItem icon="ti ti-user" name="UserPage" />
        </StyledNavLink>
        {loginState?.id ? (
          <StyledNavLink to="/logOut">
            <NavItem icon="ti ti-logout" name="logOut" />
          </StyledNavLink>
        ) : (
          <StyledNavLink to="/login">
            <NavItem icon="ti ti-login" name="Login" />
          </StyledNavLink>
        )}
        <StyledNavLink to="/cart">
          <NavItem icon="ti ti-shopping-cart" name="Cart" />
        </StyledNavLink>
      </Container>
      <Outlet />
    </>
  );
}
