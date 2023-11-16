import { useContext, useEffect } from "react";
import { AlbumContext } from "./MusicShop";
import { useNavigate } from "react-router-dom";

export function LogOut() {
  const { setLoginState } = useContext(AlbumContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify({ id: null }));
    setLoginState({ id: null });
    navigate("/");
  }, []);

  return <></>;
}
