import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AlbumContext } from "./MusicShop";
import { useQuery } from "react-query";
import { pwfind } from "./api";

const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 2px 2px 5px grey;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: lightblue;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border: 1px solid blue;
`;
export function FindPW() {
  console.log("Component FindPW");
  const [loginId, setloginId] = useState("");
  const [email, setEmail] = useState("");
  const { setPasswordState } = useContext(AlbumContext);

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(
    "pwfind",
    () => {
      if (loginId && email) {
        return pwfind({ loginId, email });
      }
    },
    { retry: 0, cacheTime: 1 }
  );

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS") {
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

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !loginId) {
      alert("이메일과 아이디를 입력하세요!");
    } else {
      if (data && data.resultCode === "SUCCESS") {
        alert("회원님의 비밀번호는 " + data.message + "입니다.");
      } else if (data && data.resultCode === "ERROR") {
        alert("없어");
      }
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
          <Button type="submit">제출</Button>
        </form>
      </Container>
    </>
  );
}
