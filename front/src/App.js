import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { MusicShop } from "./TupacComponents/MusicShop";
const GlobalStyle = createGlobalStyle`
@font-face{
  font-family:'bitbit';
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
}
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins','bitbit';
  
  }`;
const client = new QueryClient();

//component는 반드시 대문자로 시작
export function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <MusicShop />
      </QueryClientProvider>
    </>
  );
}
