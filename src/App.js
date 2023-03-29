import './App.css';
import StyledHeader from "./components/StyledHeader";
import {DangerButton, SuccessButton} from "./components/PropsButton";
import {createGlobalStyle} from "styled-components";
import AlternativeHeader from "./components/AlternativeHeader";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

function App() {
    return (
        <div>
            <GlobalStyle/>
            <StyledHeader title="hello from app js"/>
            <br/>
            <AlternativeHeader title="hello from alternative header"/>
            <DangerButton big>danger button</DangerButton>
            <SuccessButton>success button</SuccessButton>
        </div>
    );
}

export default App;
