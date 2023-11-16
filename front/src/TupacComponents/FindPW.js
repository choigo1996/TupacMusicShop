import { useState } from "react";
import styled from "styled-components";

const Header = styled.div``;
const Container = styled.div``;

export function FindPW() {
  const [email, setEmail] = useState("");
  const [loginId, setloginId] = useState("");
  return (
    <>
      <Container>
        <Header>비밀번호 찾기</Header>
        <form>
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
