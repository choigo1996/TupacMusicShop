import styled from "styled-components";
import { useQuery } from "react-query";
import { signUp } from "./api";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AlbumContext } from "./MusicShop";

const Container = styled.div`
  width: 350px;
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
const EmailBtn = styled.button``;
const IDBtn = styled.button``;
const genderlist = [
  { value: "MAN", label: "남자" },
  { value: "WOMAN", label: "여자" },
];
const visitlist = [
  { value: "LOCAL", label: "내국인" },
  { value: "FOREIGNER", label: "외국인" },
];
export function Register() {
  //비밀번호,비밀번호 확인
  const [password, setPassword] = useState("");
  const [passwordCheack, setPasswordCheack] = useState("");
  //오류메시지 상태저장
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheackMessage, setPasswordCheackMessage] = useState("");
  //유효성 검사
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordCheack, setIsPasswordCheack] = useState("");

  const [loginId, setLoginId] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("MAN");
  const [visit, setVisit] = useState("LOCAL");
  const [email, setEmail] = useState("");

  const [userRegister, setUserRegister] = useState(null);
  const [registering, setRegistering] = useState(false);
  const [registerComplete, setRegisteringComplete] = useState(false);
  const { loginState, setLoginState } = useContext(AlbumContext);
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery("register", () => {
    if (userRegister) {
      setRegistering(true);
      return signUp(userRegister);
    }
  });

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && userRegister) {
      console.log(data);
      // 1. 가입완료된 이후 자동로그인 하기
      localStorage.setItem(
        "loginState",
        JSON.stringify({ id: userRegister.loginId })
      );
      setLoginState({ id: userRegister.loginId });
      setTimeout(() => {
        navigate("/dashboard");
        setRegistering(false);
      }, 1000);
      // 2. 가입완료된 이후 다시 로그인하도록 하기
      // setRegistering(false);
      // setRegisteringComplete(true);
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/login");
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [userRegister]);
  //비밀번호 확인맨
  useEffect(() => {
    if (password === passwordCheack) {
      setPasswordCheackMessage("비밀번호가 일치합니다.");
      setIsPasswordCheack(false);
    } else {
      setPasswordCheackMessage("비밀번호가 일치하지않습니다");
      setIsPasswordCheack();
    }
  });
  function onSubmit(e) {
    e.preventDefault();
    const user = {
      loginId: loginId,
      password: password,
      passwordCheack: passwordCheack,
      name: username,
      birthDate: birthDate,
      gender: gender,
      visit: visit,
      email: email,
    };
    //패스워드 확인용
    if (password === passwordCheack) {
      setPasswordCheackMessage("비밀번호가 일치합니다.");
      setUserRegister(user);
    } else {
      setPasswordCheackMessage("비밀번호가 일치하지않습니다");
      window.alert("비밀번호를 일치하게 입력하세요");
    }
  }

  return (
    <>
      {registering ? (
        <h1>로그인중입니다...</h1>
      ) : registerComplete ? (
        <h1>가입이 완료되었습니다. 감사합니다.</h1>
      ) : loginState?.id ? (
        <>
          <h1>이미 로그인되어 있습니다. ({loginState.id})</h1>
          <h1>먼저 로그아웃하신 후에 가입해주세요</h1>
        </>
      ) : (
        <Container>
          <form onSubmit={onSubmit}>
            <Header>회원가입</Header>
            {/* 1. 아이디 */}
            <div>
              <label>아이디</label>
              <br />
              <input
                id="loginId"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
              />
              {/* <IDBtn>중복확인</IDBtn> */}
            </div>
            {/* 2. 이름 */}
            <div>
              <label>이름</label>
              <br />
              <input
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* 3.비밀번호 */}
            <div>
              <label>비밀번호</label>
              <br />
              <input
                id="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {password.length > 0 && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMessage}
                </span>
              )}
            </div>
            {/* 3-1. 비밀번호 확인 */}
            <div>
              <label>비밀번호 확인</label>
              <br />
              <input
                id="passwordCheack"
                type="password"
                onChange={(e) => setPasswordCheack(e.target.value)}
              />
              {passwordCheack.length > 0 && (
                <span
                  className={`message ${
                    isPasswordCheack ? "success" : "error"
                  }`}
                >
                  {passwordCheackMessage}
                </span>
              )}
            </div>
            {/* 4.생년월일 */}
            <div>
              <label>생년월일 (YYYY-MM-DD)</label>
              <br />
              <input
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            {/* 5.성별 */}
            <div>
              <label>성별 (남자 또는 여자)</label>
              <br />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                {genderlist.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* 6.국적 확인 */}
            <div>
              <label>국적 확인</label>
              <br />
              <select value={visit} onChange={(e) => setVisit(e.target.value)}>
                {visitlist.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* 7.이메일 */}
            <div>
              <label>이메일</label>
              <br />
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <EmailBtn>중복확인</EmailBtn> */}
            </div>
            <Button type="submit">제출</Button>
          </form>
        </Container>
      )}
    </>
  );
}
