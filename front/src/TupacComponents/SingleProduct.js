import { useContext } from "react";
import { AlbumContext } from "./MusicShop";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Img = styled.img`
  width: 40%;
  display: block;
  margin: 0px auto;
`;

const Content = styled.div`
  margin-left: 10px;
  font-size: 1rem;
`;

export function SingleProduct() {
  const { albums } = useContext(AlbumContext);

  const { id } = useParams();

  const album = albums.find((a) => a.id === +id);

  const {
    title: albumTitle,
    release_date,
    price,
    image,
    explanation,
    songs,
  } = album;
  return (
    <>
      <Title>{albumTitle}</Title>
      <Container>
        <Img src={image} />
        <Content>
          <p>발매일 : {release_date}</p>
          <p>가격 : {price}</p>
          <p>앨범설명 : {explanation}</p>

          <h2>노래 목록</h2>
          <ul>
            {songs.map((song) => (
              <li key={song.id}>
                {song.trackNum}. {song.title}
              </li>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
}
