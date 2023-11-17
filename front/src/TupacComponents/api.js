//앨범의 모든 정보를 가져온다.
export function getAllAlbums() {
  return fetch(`http://localhost:8080/products`, {
    method: "GET",
  }).then((response) => response.json());
}
//앨범 하나의 정보를 가져온다.
export function getAlbumById(id) {
  return fetch(`http://localhost:8080/products/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}
//구매한 상품이 대시보드에 표시
export function purchaseAllbums(albums, loginId) {
  const purchases = albums.map((album) => ({
    album: album,
    loginId: loginId,
    quantity: 1, // 원하는 구매 수량을 여기에 설정
  }));
  return fetch(`http://localhost:8080/products/purchaselist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchases),
  })
    .then((response) => response.json())
    .catch(() => "ERROR");
}
//구매한 상품을 회원마다 관리
export function getPurchaseById(loginId) {
  return fetch(`http://localhost:8080/products/purchase/${loginId}`, {
    method: "GET",
  }).then((response) => response.json());
}
//회원가입
export function signUp(user) {
  return fetch(`http://localhost:8081/api/member/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}
//로그인
export function login(user) {
  return fetch(`http://localhost:8081/api/member/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}
//ID찾기
export function loginfind(user) {
  return fetch(`http://localhost:8081/api/member/loginfind`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}
//비밀번호 찾기
export function pwfind(user) {
  console.log("pwfind", user);
  return fetch(`http://localhost:8081/api/member/pwfind`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
  console.log(pwfind);
}
