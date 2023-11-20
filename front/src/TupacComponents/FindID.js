import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginfind } from "./api";
import { AlbumContext } from "./MusicShop";
import { useQuery } from "react-query";
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
    if (data && data.resultCode === "SUCCESS" && useremail) {
      localStorage.setItem("loginState", JSON.stringify({ id: useremail }));
      setLoginState({ id: useremail });
      setTimeout(() => {
        navigate("/loginfind");
      }, 1000);
    } else if (data && data.resultCode === "ERROR" && useremail) {
      console.log(data);
      navigate("/loginfind");
    }
  }, [data]);

  function onSubmit(e) {
    e.preventDefault();
    if (!useremail) {
      alert("이메일을 입력하세요!");
    } else {
      if (data) {
        if (data.resultCode === "SUCCESS") {
          alert("회원님의 아이디는 " + data.message + "입니다.");
          setUserEmail(""); // Clear the input field
        } else if (data.resultCode === "ERROR") {
          console.log(data); // Log the details for debugging
          alert(data.message || "서버 에러 발생"); // Display a generic error message or use the provided message
        }
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
