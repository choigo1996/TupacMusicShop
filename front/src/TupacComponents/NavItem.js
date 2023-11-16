import styled from "styled-components";

const Container = styled.div``;

export function NavItem({ icon, name }) {
  return (
    <>
      <Container>
        <i className={icon}></i>
        <span>{name}</span>
      </Container>
    </>
  );
}
