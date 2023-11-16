import { useContext } from "react";
import { AlbumContext } from "./MusicShop";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { loginState } = useContext(AlbumContext);

  if (loginState?.id) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
