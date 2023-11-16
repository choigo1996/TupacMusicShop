import { useContext } from "react";
import styled from "styled-components";
import { AlbumContext } from "./MusicShop";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-top: 10px;
  width: 1000px;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Header = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  font-size: 1.5rem;
`;
const Card = styled.div`
  width: 240px;
  border: 2px solid dodgerblue;
  margin-bottom: 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.p``;

export function Products() {
  const navigate = useNavigate();
  const { checkList, setCheckList, albums } = useContext(AlbumContext);

  function onClick(id) {
    navigate(`${id}`);
  }

  function onChange(e) {
    const temp = checkList.map((item) => {
      if (item.id === +e.target.id) {
        return { ...item, checked: e.target.checked };
      } else {
        return item;
      }
    });
    setCheckList(temp);
  }

  return (
    <>
      <Header>투팍 정규 앨범 및 사후 앨범 판매</Header>
      <Container>
        {albums.map((album, i) => (
          <Card key={album.id}>
            <div onClick={() => onClick(album.id)}>
              <Img src={album.image} />
              <Text>타이틀 : {album.title}</Text>
              <Text>발매일 : {album.release_date}</Text>
              <Text>가격 : {album.price}</Text>
            </div>
            <input
              type="checkbox"
              id={album.id}
              onChange={onChange}
              checked={checkList[i].checked}
            />
          </Card>
        ))}
      </Container>
    </>
  );
}
