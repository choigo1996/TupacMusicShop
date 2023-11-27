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
  padding-left: 10px;
`;
const Text = styled.div`
  font-size: 1.2rem;
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
            <Text>-본명 : 투팍 아마루 샤커(TUAPC Amaru Shakur)</Text>
            <Text>-출생 : 1971년 6월 16일 뉴욕 주 이스트할렘</Text>
            <Text>-출신 : 캘리포니아 주 로스엔젤레스</Text>
            <Text>
              -사망 : 1996년 9월 13일 (향년 25세) 네바다 주 라스베이거스
              웨스트찰스턴대로 1800번지 유니버시티 메디컬 센터
            </Text>
            <Text>-거주지 : 메릴랜드 주 볼티모어 그린마운트가 3955번지</Text>
            <Text>-국적 : 미국</Text>
            <Text>-직업 : 래퍼,배우,사회운동가</Text>
            <Text>
              -Billboard Hot 100 1Rank : California Love (1995),How Do U Want It
              (1996)
            </Text>
            <Text>
              -Billboard Hot 100 2~10Rank : Dear Mama/Old school (1995)
            </Text>
            <Text>
              -Billboard Hot 100 11~20Rank : I Get Around (1993),Keep Ya Head Up
              (1993),Smile (1997),Thugz Mansion (2002),Runnin' (Dying to
              Live)(2003)
            </Text>
            <Text>
              -Billboard Hot 100 21~50Rank : Are U Still Down? (1998),Do for
              Love(1998),Changes (1999),So Many Tears (1998)
            </Text>
            <Text>
              -Diamond Certification : All Eyez On Me(1996),Greatest Hits
              (1998,after death albums)
            </Text>
          </Left>
        </Main>
      </Container>
    </>
  );
}
