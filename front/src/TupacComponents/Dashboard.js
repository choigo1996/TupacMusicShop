import { useContext } from "react";
import { AlbumContext } from "./MusicShop";
import { useQuery } from "react-query";
import { getPurchaseById } from "./api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 250px;
`;
export function Dashboard() {
  const { loginState } = useContext(AlbumContext);
  const { data, isLoading } = useQuery("getPurchaseById", () =>
    getPurchaseById(loginState?.id)
  );
  const navigate = useNavigate();
  function onClick(id) {
    navigate(`/products/${id}`);
  }
  return (
    <>
      <h1>내 정보 페이지</h1>
      <h3>{loginState?.id}의 구매목록</h3>
      {!isLoading
        ? data.map((d, i) => (
            <p key={i}>
              <Img src={d.album.image} onClick={() => onClick(d.album.id)} />
              <br />
              타이틀 : {d.album.title}
              <br />
              수량 : {d.quantity}
            </p>
          ))
        : null}
    </>
  );
}
