import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AlbumContext } from "./MusicShop";
import { useQuery } from "react-query";
import { pwfind } from "./api";

const Header = styled.div``;
const Container = styled.div``;

export function FindPW() {
  console.log("Component FindPW");
  const [loginId, setloginId] = useState("");
  const [email, setEmail] = useState("");
  const { setPasswordState } = useContext(AlbumContext);

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(
    "pwfind",
    () => {
      console.log("func pwfind call");
      if (loginId && email) {
        return pwfind({ loginId, email });
      }
    },
    { retry: 0, cacheTime: 1 }
  );

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS") {
      console.log("data", data);
      localStorage.setItem(
        "passwordState",
        JSON.stringify({ id: loginId, email })
      );
      setPasswordState({ id: loginId, email });
      setTimeout(() => {
        navigate("/pwfind");
      }, 1000);
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/pwfind");
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [loginId, email]);
  function onSubmit(e) {
    e.preventDefault();
    if (!email || !loginId) {
      alert("이메일과 아이디를 입력하세요!");
    } else {
      refetch();
    }
  }
  return (
    <>
      <Container>
        <Header>비밀번호 찾기</Header>
        <form onSubmit={onSubmit}>
          <div>
            <label>이메일</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>아이디</label>
            <input
              id="loginId"
              value={loginId}
              onChange={(e) => setloginId(e.target.value)}
            />
          </div>
          <button type="submit">제출</button>
        </form>
      </Container>
    </>
  );
}
