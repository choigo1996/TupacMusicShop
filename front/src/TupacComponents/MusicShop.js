import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { ProductWrapper } from "./ProductWrapper";
import { SingleProduct } from "./SingleProduct";
import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "./Dashboard";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { LogOut } from "./LogOut";
import { Error } from "./Error";
import { getAllAlbums } from "./api";
import { createContext, useEffect } from "react";
import { Register } from "./Register";
import { useState } from "react";
import { FindID } from "./FindID";
import { FindPW } from "./FindPW";

const client = new QueryClient();
export const AlbumContext = createContext();

export function MusicShop() {
  const { data, isLoading } = useQuery("albums", getAllAlbums);
  return (
    <>
      <QueryClientProvider client={client}>
        {!isLoading && data && (
          <MusicShopLoader
            albums={data}
            albumsCheckList={data.map((a) => {
              return { id: a.id, checked: false };
            })}
          />
        )}
      </QueryClientProvider>
    </>
  );
}

function MusicShopLoader({ songs, albums, albumsCheckList }) {
  const [checkList, setCheckList] = useState(albumsCheckList);
  const [loginState, setLoginState] = useState(null);
  const [passwordState, setPasswordState] = useState(null);
  useEffect(() => {
    const storedLoginState = setLoginState(
      JSON.parse(localStorage.getItem("loginState"))
    );
    console.log("Login State", storedLoginState);
    setLoginState(storedLoginState);
  }, []);

  return (
    <>
      <AlbumContext.Provider
        value={{
          checkList,
          setCheckList,
          loginState,
          setLoginState,
          albums,
          passwordState,
          setPasswordState,
          songs,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<ProductWrapper />}>
                <Route index element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="logOut" element={<LogOut />} />
              <Route path="register" element={<Register />} />
              <Route path="loginfind" element={<FindID />} />
              <Route path="pwfind" element={<FindPW />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlbumContext.Provider>
    </>
  );
}
