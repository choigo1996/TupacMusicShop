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
  const { loginState, setLoginState } = useContext(AlbumContext);

  const { data, isLoading, refetch } = useQuery(
    "login",
    () => {
      if (useremail) {
        setUserEmail(true);
        return loginfind(useremail);
      }
    },
    { retry: 0 }
  );
  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && useremail) {
      console.log(data);
      localStorage.setItem(
        "loginState",
        JSON.stringify({ id: useremail.email })
      );
      setLoginState({ id: useremail.email });
      setTimeout(() => {
        navigate("/dashboard");
        setUserEmail(false);
      }, 1000);
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/login");
    }
  }, [data]);
  function onSubmit(e) {
    e.preventDfault();
    const findUser = {
      useremail: useremail,
    };
    if (!useremail) {
      return alert("이메일을 입력하세요.");
    }
  }

  return (
    <>
      <Container>
        <form onSubmit={{ onSubmit }}>
          <Header>아이디 찾기</Header>
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
