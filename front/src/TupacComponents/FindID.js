import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginfind } from "./api";
import { AlbumContext } from "./MusicShop";
import { useQuery } from "react-query";
const Container = styled.div``;
const Header = styled.div``;
const Button = styled.button``;

export function FindID() {
  const navigate = useNavigate();

  const [useremail, setUserEmail] = useState("");
  const { setLoginState } = useContext(AlbumContext);

  const { data, isLoading, refetch } = useQuery(
    "login",
    () => {
      if (useremail) {
        return loginfind(useremail);
      }
    },
    { retry: 0, cacheTime: 1 }
  );
  useEffect(() => {
    console.log(data);
    if (data && data.resultCode === "SUCCESS") {
      localStorage.setItem("loginState", JSON.stringify({ id: useremail }));
      setLoginState({ id: useremail });
      setTimeout(() => {
        navigate("/loginfind");
      }, 1000);
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/loginfind");
    }
  }, [data]);
  function onSubmit(e) {
    e.preventDefault();
    if (!useremail) {
      alert("이메일을 입력하세요!");
    } else {
      if (data && data.resultCode === "SUCCESS") {
        alert("회원님의 아이디는 " + data.message + "입니다.");
      } else if (data && data.resultCode === "ERROR") {
        alert("없어");
      }
    }
  }

  return (
    <>
      <Container>
        <Header>아이디 찾기</Header>
        <form onSubmit={onSubmit}>
          <div>
            <label>이메일을 입력하세요.</label>
            <br />
            <input
              id="email"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <Button type="submit">찾기</Button>
        </form>
      </Container>
    </>
  );
}
