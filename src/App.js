import React, {useState} from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);

  
  const toggleTema = () => {
    setTema(!tema);
  };

  return (
    <ThemeProvider theme={tema? temaClaro: temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
