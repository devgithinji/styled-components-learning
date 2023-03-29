import './App.css';
import {AwesomeInput, BasicInput} from "./components/Inputs";


function App() {
    return (
        <div>
            <BasicInput/>
            <AwesomeInput/>
            <AwesomeInput type="email" placeholder="Enter email"/>
        </div>
    );
}

export default App;
