import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw-10px);
`;
const Header = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  font-size: 1.5rem;
  background-color: black;
  text-align: center;
  color: white;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
`;
const Right = styled.img`
  width: 100%;
  height: 100%;
`;
const Left = styled.div`
  width: 100%;
`;

export function Home() {
  return (
    <>
      <Container>
        <Header>Tupac Music Shop</Header>
        <Main>
          <Right src="https://i.namu.wiki/i/CS5eyCcj8F8hmdimIF3ilmFU2DUb51-2rCmGU3NIzLowyC6LfiTpB0KSeWuWAPnC0UlAEvWO6UyyGT953Sh8WTehs-fi4R2UIwb7k8oqtULFwvW9VWtyNyLvGN8QpCXPILCsOpG3cIamnSb_Aog78Q.webp"></Right>
          <Left>
            <h1>투팍의 이력</h1>
          </Left>
        </Main>
      </Container>
    </>
  );
}
