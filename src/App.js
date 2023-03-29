import './App.css';
import {ThemeProvider} from "styled-components";
import {blueTheme, greenTheme, redTheme} from "./components/themes";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Content from "./components/Content";
import {useState} from "react";

const App = () => {
    const [theme, setTheme] = useState(redTheme)

    const toggleTheme = () => {
        if (theme.primaryColor === 'red') {
            setTheme(greenTheme);
        } else if (theme.primaryColor === 'green') {
            setTheme(blueTheme);
        } else {
            setTheme(redTheme);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Navbar>
                    <Button onClick={toggleTheme}>toggle theme</Button>
                </Navbar>
                <Content/>
            </main>
        </ThemeProvider>
    )
};

export default App;
